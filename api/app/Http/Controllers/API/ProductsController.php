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
}
