<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

use App\Automatics;
use App\Bids;
use App\Products;

class ProcessAutomaticBid implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private $productId;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($productId)
    {
        $this->productId = $productId;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $automaticBids = Automatics::whereProductId($this->productId)->with('user')->get();
        $lastBid = Products::whereId($this->productId)->with('lastBid')->first();
        $lastBidAmount = $lastBid->lastBid->bid ?? 0;

        if($automaticBids->count() > 0){
            foreach ($automaticBids as $key => $automaticBid) {
                $hasBalance = $automaticBid->user->balance > 0 && ($automaticBid->user->balance > ($lastBidAmount + 1)) > 0;
                if($hasBalance){
                    Bids::create([
                        'bid' => $lastBidAmount + 1,
                        'product_id' => $this->productId,
                        'user_id' => $automaticBid->user->id
                    ]);

                    $automaticBid->user->balance -= $lastBidAmount + 1;
                    $automaticBid->user->save();
                }
                else{
                    $automaticBid->delete();
                }
            }
        }
    }

}
