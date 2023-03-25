<?php

namespace App\Http\Controllers;

use App\Models\ProfileUser;
use App\Models\User;
use App\QueryBuilders\ProfileQueryBuilder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AccountController extends Controller
{
    public function index()
    {
        $id = Auth::id();

        $user = ProfileUser::query()->where('user_id',$id)->get();
//            dump($user);

        return Inertia::render('PersonalAccount')->with('user',$user);
    }
}
