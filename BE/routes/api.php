<?php

use App\Http\Controllers\FoodTruckController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('import-csv', [FoodTruckController::class, 'importCSV']);
Route::get('getData', [FoodTruckController::class, 'getAllData']);
Route::get('hasData', [FoodTruckController::class, 'hasData']);
Route::get('getByKey', [FoodTruckController::class, 'getByKey']);
