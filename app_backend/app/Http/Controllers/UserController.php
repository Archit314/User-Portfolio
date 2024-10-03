<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
    public function create()
    {
        //
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
    // Mock data for demonstration purposes
    $users = [
        1 => ['name' => 'John Doe', 'email' => 'john@example.com', 'role' => 'Admin'],
        2 => ['name' => 'Jane Smith', 'email' => 'jane@example.com', 'role' => 'User'],
    ];

    // Check if the user exists in the mock data
    if (array_key_exists($id, $users)) {
        return response()->json($users[$id]);
    } else {
        return response()->json(['error' => 'User not found'], 404);
    }
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
