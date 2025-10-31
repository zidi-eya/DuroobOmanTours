<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Super Admin
        $superAdmin = User::firstOrCreate(
            ['email' => 'admin@duroobomantours.com'],
            [
                'name' => 'Super Admin',
                'password' => Hash::make('password'),
            ]
        );
        $superAdmin->assignRole('super-admin');

        // Agent
        $agent = User::firstOrCreate(
            ['email' => 'agent@duroobomantours.com'],
            [
                'name' => 'Agent Touristique',
                'password' => Hash::make('password'),
            ]
        );
        $agent->assignRole('agent');

        // Visiteur
        $visiteur = User::firstOrCreate(
            ['email' => 'visiteur@duroobomantours.com'],
            [
                'name' => 'Visiteur',
                'password' => Hash::make('password'),
            ]
        );
        $visiteur->assignRole('visiteur');
    }
}
