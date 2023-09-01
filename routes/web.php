<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\AdminController;

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

Route::get('/cache', function () {     Artisan::call('config:cache'); 	Artisan::call('view:cache'); 	Artisan::call('route:clear'); 	 	return "clear"; });


// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/', [WelcomeController::class, 'index'])->name('home');
Route::get('about', [WelcomeController::class, 'about'])->name('about');
Route::get('feature', [WelcomeController::class, 'feature'])->name('feature');
Route::get('/portfolio', [WelcomeController::class, 'portfolio'])->name('portfolio');
Route::get('/team', [WelcomeController::class, 'team'])->name('team');
Route::get('/contact', [WelcomeController::class, 'contact'])->name('contact');
Route::get('/faq', [WelcomeController::class, 'faq'])->name('faq');
Route::get('/android', [WelcomeController::class, 'android'])->name('android');
Route::get('/software', [WelcomeController::class, 'software'])->name('software');
Route::get('/web', [WelcomeController::class, 'web'])->name('web');
Route::get('/logo', [WelcomeController::class, 'logo'])->name('logo');
Route::get('/ui_designing', [WelcomeController::class, 'ui_designing'])->name('ui_designing');
Route::get('/seo_services', [WelcomeController::class, 'seo_services'])->name('seo_services');
Route::get('/digital_marketing', [WelcomeController::class, 'digital_marketing'])->name('digital_marketing');
Route::get('/disclaimer', [WelcomeController::class, 'disclaimer'])->name('disclaimer');
Route::get('/privacy_policy', [WelcomeController::class, 'privacy_policy'])->name('privacy_policy');
Route::get('/refund_policy', [WelcomeController::class, 'refund_policy'])->name('refund_policy');

Route::get('/login', [AdminController::class, 'login'])->name('login');
Route::get('/doLogin', [AdminController::class, 'check'])->name('doLogin');
Route::get('/register', [AdminController::class, 'register'])->name('register');
Route::get('/doRegister', [AdminController::class, 'create'])->name('doRegister');