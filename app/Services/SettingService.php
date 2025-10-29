<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Exception;

class SettingService
{
    protected $settings = [
        'company' => [
            'company_name' => 'My ShopKing',
        ],
        'site' => [
            'site_name' => 'ShopKing',
        ],
        'theme' => [
            'color' => 'blue',
        ],
    ];

    protected $currentGroup = null;

    public function group($group)
    {
        $this->currentGroup = $group;
        return $this;
    }

    public function set(string $group, array $data)
    {
        foreach ($data as $key => $value) {
            \DB::table('settings')->updateOrInsert(
                ['group' => $group, 'name' => $key],
                ['payload' => json_encode($value)]
            );
        }
    }

    public function all(): array
    {
        if (!$this->currentGroup) {
            throw new \Exception('No group selected. Use group("name") before calling all().');
        }
        
        return \DB::table('settings')
            ->where('group', $this->currentGroup)
            // ->pluck('payload', 'key')
            ->pluck('payload', 'name')
            ->map(fn($payload) => json_decode($payload, true))
            ->toArray();
    }

    public function get(string $key, $default = null)
    {
        if (!$this->currentGroup) {
            throw new \Exception('No group selected. Use group("name") before calling get().');
        }

        $record = \DB::table('settings')
            ->where('group', $this->currentGroup)
            ->where('key', $key)
            ->first();

        return $record ? json_decode($record->payload, true) : $default;
    }

    public function list(): array
    {
        try {
            $groups = [
                'company',
                'site',
                'shipping_setup',
                'theme',
                'otp',
                'social_media',
                'notification',
                'cookies'
            ];

            $merged = [];

            foreach ($groups as $group) {
                $settings = DB::table('settings')
                    ->where('group', $group)
                    ->pluck('payload', 'name')
                    ->map(fn($payload) => json_decode($payload, true))
                    ->toArray();

                $merged = array_merge($merged, $settings);
            }

            return $merged;
        } catch (Exception $e) {
            Log::error('Failed to load settings: ' . $e->getMessage());
            throw new Exception('Error loading settings', 422);
        }
    }

    

    // public function all()
    // {
    //     return $this->settings[$this->currentGroup] ?? [];
    // }

    // public function get($key, $default = null)
    // {
    //     return $this->settings[$this->currentGroup][$key] ?? $default;
    // }
}
