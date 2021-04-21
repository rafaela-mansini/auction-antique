<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    protected $fillable = ['name', 'description', 'image', 'initial_bid', 'expired_time'];

    public function search($description, $sortBy){
        if(empty($description) && empty($sortBy)) {
            return null;
        }

        $query = $this->where('description', 'like', "%$description%");

        if(empty($sortBy)){
            echo 'here1';
            $query->orderBy('created_at', 'desc');
        }
        else{
            echo 'here2';
            $query->orderBy('initial_bid', $sortBy);
        }

        return $query;
    }
}
