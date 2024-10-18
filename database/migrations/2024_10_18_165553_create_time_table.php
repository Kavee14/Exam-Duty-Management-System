<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTimeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('time_table', function (Blueprint $table) {
            $table->id('Timetable_ID'); // Creates an auto-incrementing primary key
            $table->date('Date'); // Creates a date column
            $table->integer('Time'); // Creates an integer column for time
            $table->string('Course', 50); // Creates a varchar column for course with max length 50
            $table->string('Hall', 50); // Creates a varchar column for hall with max length 50
            $table->integer('Admin_ID'); // Creates an integer column for Admin ID

            $table->primary('Timetable_ID'); // Sets the primary key
            $table->foreign('Admin_ID')->references('id')->on('admins'); // Adjust the referenced table and column as necessary
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('time_table');
    }
}
