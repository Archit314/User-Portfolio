<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController; 
use App\Http\Controllers\Blogs\UserBlogController; 

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/user/detail/{id}', [UserController::class, 'show']);
Route::post('/user/sign-up', [UserController::class, 'create']);

Route::post('/user/blog/add', [UserBlogController::class, 'create']);
Route::get('/user/{userId}/blog/list', [UserBlogController::class, 'index']);