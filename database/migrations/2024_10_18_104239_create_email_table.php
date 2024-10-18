<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('email', function (Blueprint $table) {
            $table->integer('Email_ID')->primary(); // Primary Key: Email_ID
            $table->text('Subject'); // Text column for Subject
            $table->text('Body'); // Text column for Body
            $table->integer('Account_ID'); // Foreign Key: Account_ID

            // Index for Account_ID
            $table->index('Account_ID', 'email_fk');
        });
    }


    public function down()
    {
        Schema::dropIfExists('email');
    }
};
