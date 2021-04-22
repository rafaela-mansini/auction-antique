<?php

use Illuminate\Database\Seeder;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=0; $i <15 ; $i++) {
            DB::table('products')->insert([
                'name' => 'Product ' . $i,
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'image' => '',
                'initial_bid' => $i,
                'expired_time' => date('2021-04-30 20:20:20'),
                'is_expired' => false,
            ]);
        }
    }
}
