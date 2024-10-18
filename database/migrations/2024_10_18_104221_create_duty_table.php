<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('duty', function (Blueprint $table) {
            $table->integer('Duty_ID')->primary(); // Primary Key: Duty_ID
            $table->date('Date'); // Date column for Date
            $table->string('Time', 10); // Time column (varchar with length 10)
            $table->string('Status', 50); // Status column (varchar with length 50)
            $table->integer('Lecturer_ID'); // Foreign Key column for Lecturer_ID
            $table->integer('Course_ID'); // Foreign Key column for Course_ID

            // Index for Lecturer_ID
            $table->index('Lecturer_ID', 'duty_fk');
        });
    }


    public function down()
    {
        Schema::dropIfExists('duty');
    }
};
