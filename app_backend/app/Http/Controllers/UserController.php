<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Validator;
use App\Models\User;
use App\Services\UserService;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request){

        Log::info('started');
        Log::info('Request', $request->all());

        // Applying validation on the request body:
        $validateUser = Validator::make($request->all(), 
            [
                'name' => 'required',
                'email' => 'required|email|unique:users,email',
                'password' => 'required'
            ]
        );

        // Returning error of the applied validation on the request body:
        if($validateUser->fails()){
            return response()->json(['status' => false, 'message' => 'validation error', 'errors' =>$validateUser->errors()], 401);
        }

        // Creating object of UserService class:
        $userService = new UserService();
        // Calling createUser method of UserService class:
        $createdUser = $userService->createUser($request->input('name'), $request->input('email'), $request->input('password'));

        $name = $request->input('name');
        Log::info($name);

        if(!$createdUser){
            return response()->json(['status' => 404, 'message' => 'User creation failed'], 404);
        }

        // Returning successful user creation response with token:
        return response()->json(['status'=> 201, 'message'=> 'User created successfully', 'data'=> $createdUser['user'], 'token' => $createdUser['token']], 201);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        return "I am archit kumar full stack developer";
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
