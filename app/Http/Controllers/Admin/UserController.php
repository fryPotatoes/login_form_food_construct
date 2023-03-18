<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function home()
    {
        return Inertia::render('Guest/Home');
    }
    public function about()
    {
        return Inertia::render('Guest/About');
    }
    public function contact()
    {
        return Inertia::render('Guest/Contact');
    }


}
