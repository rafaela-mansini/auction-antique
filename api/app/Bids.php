<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bids extends Model
{
    protected $fillable = ['bid', 'product_id', 'user_id'];

    public function products(){
        return $this->belongsTo('App\Products');
    }
}
