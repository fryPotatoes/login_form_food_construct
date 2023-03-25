<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\QueryBuilders\MenuQueryBuilder;

class MenuController extends Controller
{
    public function index()
    {
        $menu = [];


        return Inertia::render('MenuBuilder', [
            'menu' => $menu,
        ]);
    }

}
