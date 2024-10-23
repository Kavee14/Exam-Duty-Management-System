<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLecturerTable extends Migration
{
    public function up()
    {
        Schema::dropIfExists('lecturer');
        Schema::create('lecturer', function (Blueprint $table) {
            $table->increments('Lecturer_ID');
            $table->string('name');
            $table->string('Email')->unique();
            $table->string('Password')->unique();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('lecturer');
    }
}
