<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Log;

class UserService
{
    public function createUser($name, $email, $password){
        $newUser = new User;
        $newUser->name = $name;
        $newUser->email = $email;
        $newUser->password = $password;

        $newUser->save();
        
        $token = $newUser->createToken("API TOKEN")->plainTextToken;

        Log::info('User created successfully');
        return [
            "user" => $newUser,
            "token" => $token
        ];;
    }
}
