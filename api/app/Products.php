<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    protected $fillable = ['name', 'description', 'image', 'initial_bid', 'expired_time'];

    public function bids(){
        return $this->hasMany('App\Bids');
    }

    public function lastBid(){
        return $this->hasOne('App\Bids', 'product_id', 'id')->orderBy('bid', 'desc')->latest();
    }
}
