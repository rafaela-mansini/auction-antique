<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Resources\BidsCollection;
use App\Http\Requests\API\StoreBid;
use App\Bids;

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
            return response()->json(['data' => $bid]);
        } catch (\Throwable $th) {
            return response()->json(['data' => ['error' => $th->getMessage()]]);
        }
    }
}
