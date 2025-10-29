<?php

namespace Database\Seeders;


use App\Enums\ShippingMethod;
use Illuminate\Database\Seeder;
use Smartisan\Settings\Facades\Settings;

class ShippingSetupTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app(\App\Services\SettingService::class)->set('shipping_setup',[
            'shipping_setup_method'                 => ShippingMethod::FLAT_WISE,
            'shipping_setup_flat_rate_wise_cost'    => "10",
            'shipping_setup_area_wise_default_cost' => "10",
        ]);
    }
}