<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    protected $fillable = ['name', 'description', 'image', 'initial_bid', 'expired_time'];
}
