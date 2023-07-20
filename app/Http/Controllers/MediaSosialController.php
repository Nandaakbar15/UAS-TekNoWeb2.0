<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MediaSosialController extends Controller
{
    public function Index()
    {
        return inertia('MediaSosial/index_medsos');
    }
}
