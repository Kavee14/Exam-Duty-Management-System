<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('change_request', function (Blueprint $table) {
            $table->integer('ChangeRequest_Id')->primary(); // Primary Key: ChangeRequest_Id
            $table->text('Status'); // Text column for Status
            $table->integer('Duty_ID'); // Foreign Key column for Duty_ID

            // Index for Duty_ID
            $table->index('Duty_ID', 'change_fk');
        });
    }


    public function down()
    {
        Schema::dropIfExists('change_request');
    }
};
