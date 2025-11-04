<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;




Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::middleware(['auth'])->group(function () {

    // Accessible uniquement aux super-admins
    Route::middleware(['role:super-admin'])->group(function () {
        Route::get('/admin', function () {
            return view('dashboard.admin');
        })->name('admin.dashboard');
    });

    // Accessible uniquement aux agents
    Route::middleware(['role:agent'])->group(function () {
        Route::get('/agent', function () {
            return view('dashboard.agent');
        })->name('agent.dashboard');
    });

    // Accessible uniquement aux visiteurs
    Route::middleware(['role:visiteur'])->group(function () {
        Route::get('/visiteur', function () {
            return view('dashboard.visiteur');
        })->name('visiteur.dashboard');
    });

});
require __DIR__.'/auth.php';
