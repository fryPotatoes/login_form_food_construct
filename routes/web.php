<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\AdviceController;
use \App\Http\Controllers\MainController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FormController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\Parsers\RecipeParserController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RecipeController;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\Admin\GuestLyoutController as AdminUserController;
use \App\Http\Controllers\CategoryController;
use \App\Http\Controllers\HomeController;
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
Route::get('/dashboard',DashboardController::class)->middleware(['auth', 'verified'])->name('dashboard');


//Auth routes
Route::middleware('auth')
    ->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('account', [AccountController::class, 'index']);
    });
//Guest routes
Route::middleware('guest')
    ->group(function () {
        Route::get('/home',[HomeController::class,'index'])->name('Home');
//Route::get('/home ', [AdminUserController::class, 'home'])->name('guest.home');
Route::get('/about', [AdminUserController::class, 'about'])->name('guest.about');
Route::get('/contact', [AdminUserController::class, 'contact'])->name('guest.contact');
        Route::get('/', [MainController::class, 'index'])->name('Main');
    });



//Test route
Route::get('/posts', [PostController::class, 'index'])->middleware(['auth', 'verified'])->name('posts.index');



//Andrey routes
Route::get('/recipes', [RecipeController::class, 'index'])->middleware(['auth', 'verified'])->name('recipes');
Route::get('/recipe/{id}', [RecipeController::class, 'show'])->middleware(['auth', 'verified'])->name('recipe');
Route::get('/category', [CategoryController::class, 'index'])->middleware(['auth', 'verified'])->name('category');
//

//Когда регистрация появиться раскомментировать
Route::middleware(['auth'])->group(function () {
    Route::get('/advice', [AdviceController::class, 'index'])->name('advice');
    Route::get('/menu/builder', [MenuController::class, 'index']);
    Route::resource('form', FormController::class);
    Route::get('account/{id}', [AccountController::class, 'index']);
});



//Anton routes
Route::get('/parser/recipes', RecipeParserController::class)->name('parser.recipe');







//Route::get('PersonalAccount', [UserController::class, 'show']);


// Route::any('{url}', function(){
//     return view('app');
// })->where('url', '.*');


// Route::get('/builder', function () {
//     return view('app');
// });





require __DIR__.'/auth.php';


