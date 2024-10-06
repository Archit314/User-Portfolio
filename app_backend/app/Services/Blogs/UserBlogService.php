<?php

namespace App\Services\Blogs;

use App\Models\Blogs\Blog;
use Illuminate\Support\Facades\Log;

class UserBlogService{

    public function create($userId, $title, $description, $image_url){

        $newBlog = new Blog();
        $newBlog->title = $title;
        $newBlog->description = $description;
        if($image_url){
            $newBlog->image_url = $image_url;
        }
        $newBlog->user_id = $userId;

        $newBlog->save();

        Log::info('User blog created successfully');

        return $newBlog;
    }

    public function list($userId){
        $userBlogs = Blog::where('user_id', $userId)->get();
        return $userBlogs;
    }
}