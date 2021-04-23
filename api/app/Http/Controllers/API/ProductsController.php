<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Resources\ProductsCollection;
use App\Products;

class ProductsController extends Controller
{
    public function index(){
        return new ProductsCollection(Products::all());
    }

    public function search(Request $request){
        if(empty($request->description) && empty($request->sortBy)){
            return new ProductsCollection(Products::all());
        }
        if(empty($request->description)){
            $request->request->add(['description' => '']);
        }
        $orderBy = empty($request->sortBy) ? 'created_at' : 'initial_bid';
        $sortBy = empty($request->sortBy) ? 'desc' : $request->sortBy;

        $products = Products::where('name', 'like', "%$request->description%")
            ->orWhere('description', 'like', "%$request->description%")
            ->orderBy($orderBy, $sortBy)
            ->get();
        return new ProductsCollection($products);
    }

    public function show($id){
        $product = Products::whereId($id)->with('lastBid')->first();
        return response()->json(['data' => $product]);
    }
}
