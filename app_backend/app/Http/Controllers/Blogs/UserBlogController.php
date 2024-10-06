<?php

namespace App\Http\Controllers\Blogs;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Services\Blogs\UserBlogService;
use Illuminate\Support\Facades\Log;

class UserBlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(string $userId)
    {
        //
        Log::info($userId);
        $userBlogService = new UserBlogService();

        $userAllBlog = $userBlogService->list($userId);

        if($userAllBlog->count() == 0){
            return response()->json(['status' => 404, 'message' => 'User blogs not found', 'data' => []], 404);
        }

        return response()->json(['status' => 200, 'message' => 'Blogs found successfully', 'data' => $userAllBlog], 200);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        //

        $validateRequestBody = Validator::make($request->all(),
            [
                'title' => 'required|string',
                'description' => 'required|string',
                'imnage_url' => 'string',
                'link' => 'required|string'
            ]
        );

        if($validateRequestBody->fails()){
            return response()->json(['status' => 401, 'message' => 'validation error', 'errors' =>$validateRequestBody->errors()], 401);
        }

        $userBlogService = new UserBlogService();
        $createdNewBlog = $userBlogService->create(4, $request->input('title'), $request->input('description'), $request->input('image_url'), $request->input('link'));

        if(!$createdNewBlog){
            return response()->json(['status' => 404, 'message' => 'User blog creation failed'], 404);
        }

        return response()->json(['status' => 200, 'message' => 'Blog added successfully', 'data' => $createdNewBlog], 200);
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
