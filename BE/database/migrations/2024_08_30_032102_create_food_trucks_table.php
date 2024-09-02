<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('food_trucks', function (Blueprint $table) {
            $table->id();
            $table->string('location_id');
            $table->string('applicant')->nullable();
            $table->string('facility_type')->nullable();
            $table->string('cnn')->nullable();
            $table->string('location_description')->nullable();
            $table->string('address')->nullable();
            $table->string('blocklot')->nullable();
            $table->string('block')->nullable();
            $table->string('lot')->nullable();
            $table->string('permit')->nullable();
            $table->string('Status')->nullable();
            $table->text('food_items')->nullable();
            $table->string('X')->nullable();
            $table->string('Y')->nullable();
            $table->string('latitude')->nullable();
            $table->string('longitude')->nullable();
            $table->string('schedule')->nullable();
            $table->string('dayshours')->nullable();
            $table->string('NOISent')->nullable();
            $table->string('Approved')->nullable();
            $table->string('Received')->nullable();
            $table->string('prior_permit')->nullable();
            $table->string('expiration_date')->nullable();
            $table->string('Location')->nullable();
            $table->string('fire_prevention_districts')->nullable();
            $table->string('police_districts')->nullable();
            $table->string('supervisor_districts')->nullable();
            $table->string('zip_codes')->nullable();
            $table->string('neighborhoods_old')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('food_trucks');
    }
};
