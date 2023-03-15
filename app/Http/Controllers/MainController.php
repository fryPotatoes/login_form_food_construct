<?php


namespace App\Http\Controllers;


use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class MainController extends Controller
{

    public function index()
    {


        return Inertia::render('Main', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),

        ]);
    }
}
