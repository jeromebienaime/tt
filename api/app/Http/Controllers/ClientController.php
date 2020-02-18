<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ClientController extends Controller
{
    //
    public function create(Request $request) {
        $request->password;
        $request->userName;
        $request->companyName;
        $request->contact->firstName;
        $request->contact->lastName;
        $request->contact->gender;
        $request->URL;
        $request->active;
    }
}
