<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\StoreProduct;
use App\Products;
use App\Files;

class ProductsController extends Controller
{
    public function store(StoreProduct $request){

        $validate = $request->validated();

        //verify if is a valid archive
        if(!$request->hasFile('imageFile') || !$request->file('imageFile')->isValid()){
            return back()->withInput()->with(['success' => false, 'message' => 'Product image is not sending.']);
        }

        $file = new Files();

        if(!$file->validate($request->imageFile)){
            return back()->withInput()->with(['success' => false, 'message' => 'File extension is not valid.']);
        }

        $file->storeFile('/products');
        $image = $file->getNameGenerated();

        try {
            $request->request->add(['image' => $image]);
            $product = Products::create($request->all());
            return back()->with(['success' => true, 'message' => 'Registration successfully complete!']);
        } catch (\Throwable $th) {
            return back()->withInput()->with(['success' => false, 'message' => 'An error occurred: '.$th->getMessage()]);
        }
    }
}
