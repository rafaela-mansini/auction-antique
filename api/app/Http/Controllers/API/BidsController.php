<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Jobs\ProcessAutomaticBid;
use App\Http\Resources\BidsCollection;
use App\Http\Requests\API\StoreBid;
use App\Http\Requests\API\StoreAutomaticBid;
use App\Bids;
use App\Automatics;
use App\User;
use App\Products;

class BidsController extends Controller
{
    public function store (StoreBid $request){
        $validate = $request->validated();
        try {
            $bid = Bids::create([
                'bid' => $validate['bid'],
                'product_id' => $validate['product_id'],
                'user_id' => $validate['user_id']
            ]);
            ProcessAutomaticBid::dispatchAfterResponse($validate['product_id']);
            return response()->json(['data' => $bid]);
        } catch (\Throwable $th) {
            return response()->json(['data' => ['error' => $th->getMessage()]]);
        }
    }

    public function automate(StoreAutomaticBid $request){
        try {
            $validate = $request->validated();
            $lastBid = Bids::select('bid')->whereProductId($validate['product_id'])->orderBy('bid', 'desc')->first();
            $bid = Bids::create([
                'bid' => $lastBid->bid + 1,
                'product_id' => $validate['product_id'],
                'user_id' => $validate['user_id']
            ]);

            Automatics::firstOrCreate([
                'user_id' => $validate['user_id'],
                'product_id' => $validate['product_id']
            ]);

            $user = User::find($validate['user_id']);
            $user->balance = $validate['balance'];
            $user->save();

            return response()->json(['data' => ['success' => true]]);
        } catch (\Throwable $th) {
            return response()->json(['data' => ['error' => $th->getMessage()]]);
        }
    }
}
