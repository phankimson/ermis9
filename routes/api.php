<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
//use App\Http\Controllers\AccApiController;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Api
  //Route::get('/case_code_dropdown_list', [AccApiController::class,'case_code_dropdown_list'] );
  //Route::get('/cost_code_dropdown_list', [AccApiController::class,'cost_code_dropdown_list'] );
  //Route::get('/statistical_code_dropdown_list', [AccApiController::class,'statistical_code_dropdown_list'] );
  //Route::get('/work_code_dropdown_list', [AccApiController::class,'work_code_dropdown_list'] );
  //Route::get('/department_dropdown_list', [AccApiController::class,'department_dropdown_list'] );
  //Route::get('/bank_account_dropdown_list', [AccApiController::class,'bank_account_dropdown_list'] );
  //Route::get('/debt_account_dropdown_list', [AccApiController::class,'debit_account_dropdown_list'] );
  //Route::get('/credit_account_dropdown_list', [AccApiController::class,'credit_account_dropdown_list'] );
