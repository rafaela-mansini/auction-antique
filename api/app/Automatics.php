<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Automatics extends Model
{
    protected $fillable = ['user_id', 'product_id'];

    public function user(){
        return $this->belongsTo('App\User');
    }
}
