<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
#Route::get('/{anypath}', [App\Http\Controllers\HomeController::class, 'index'])->where('path','.*');
Route::post('/add-category', [App\Http\Controllers\admin\CategoryController::class, 'store']);
Route::get('/get-category', [App\Http\Controllers\admin\CategoryController::class, 'index']);
Route::get('/remove-category/{id}', [App\Http\Controllers\admin\CategoryController::class, 'destroy']);
Route::get('/show-category/{id}', [App\Http\Controllers\admin\CategoryController::class, 'show']);
Route::post('/update-category', [App\Http\Controllers\admin\CategoryController::class, 'update']);



