<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('account', function (Blueprint $table) {
            $table->integer('Account_ID')->primary();
            $table->string('Password', 10); // varchar(10)
            $table->text('UserName'); // text field for username
        });
    }


    public function down()
    {
        Schema::dropIfExists('account');
    }
};
