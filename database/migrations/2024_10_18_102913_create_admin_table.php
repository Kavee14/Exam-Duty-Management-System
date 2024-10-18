<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('admin', function (Blueprint $table) {
            $table->integer('Admin_ID')->primary(); // Primary Key: Admin_ID
            $table->string('Name', 30); // varchar(30) for Name
            $table->string('Password', 10); // varchar(10) for Password
            $table->string('Email', 20); // varchar(20) for Email
        });
    }


    public function down()
    {
        Schema::dropIfExists('admin');
    }
};
