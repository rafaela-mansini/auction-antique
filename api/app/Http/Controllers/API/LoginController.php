<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Requests\API\Login;
use App\Http\Resources\LoginCollection;
use App\User;

class LoginController extends Controller
{
    public function login(Login $request){
        $validate = $request->validated();
        $user = User::whereName($validate['username'])->latest()->first();
        return response()->json(['data' => $user]);
    }
}
