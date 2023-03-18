<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RecipeController;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\Admin\UserController as AdminUserController;

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
//


Route::get('/', [\App\Http\Controllers\MainController::class, 'index'])->name('Main')->middleware('guest');

Route::get('/dashboard',DashboardController::class)->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')
    ->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    });
//Guest routes

Route::middleware('guest')
    ->group(function () {
Route::get('/home ', [AdminUserController::class, 'home'])->name('guest.home');
Route::get('/about', [AdminUserController::class, 'about'])->name('guest.about');
Route::get('/contact', [AdminUserController::class, 'contact'])->name('guest.contact');
    });



//Test route
Route::get('/posts', [PostController::class, 'index'])->name('posts.index');



//Andrey
Route::get('/recipes', [RecipeController::class, 'index'])->middleware(['auth', 'verified'])->name('recipes');



require __DIR__.'/auth.php';


