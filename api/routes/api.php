<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\ProductsController;
use App\Http\Controllers\API\LoginController;
use App\Http\Controllers\API\BidsController;
use App\Http\Controllers\API\UsersController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', [LoginController::class, 'login']);

Route::post('users/balance', [UsersController::class, 'balance']);

Route::get('products', [ProductsController::class, 'index']);
Route::post('products/search', [ProductsController::class, 'search']);
Route::get('products/{id}', [ProductsController::class, 'show']);

Route::post('make-bid', [BidsController::class, 'store']);
Route::post('automate-bid', [BidsController::class, 'automate']);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
