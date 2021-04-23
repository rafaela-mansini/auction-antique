<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Resources\UsersCollection;
use App\User;

class UsersController extends Controller
{
    public function balance(Request $request){
        $user = User::find($request->id);
        return response()->json(['data' => $user]);
    }
}
