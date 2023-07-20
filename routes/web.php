<?php

use App\Http\Controllers\MediaSosialController;
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

// Route::get('/', function () {
//     return view('welcome');
// });


Route::resource('/', \App\Http\Controllers\IndexController::class);

Route::resource('/barang', \App\Http\Controllers\BarangController::class);

Route::resource('/pelanggan', \App\Http\Controllers\PelangganController::class);

Route::resource('/about-us', \App\Http\Controllers\AboutUsController::class);

Route::resource('/medsos', MediaSosialController::class);

Route::get('/barang', [\App\Http\Controllers\BarangController::class, 'index'])->name('barang.indexbarang');

Route::get('/pelanggan', [\App\Http\Controllers\PelangganController::class, 'index'])->name('pelanggan.indexcustomer');
