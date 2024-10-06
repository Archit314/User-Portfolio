<?php

namespace App\Models\Blogs;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'title', 'description', 'image_url', 'link'];

    // Relationship to User
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
