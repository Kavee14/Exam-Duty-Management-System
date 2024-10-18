<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('hod', function (Blueprint $table) {
            $table->integer('Department_ID')->primary();
            $table->string('Name', 30);
        });
    }

    public function down()
    {
        Schema::dropIfExists('hod');
    }

};
