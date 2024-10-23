<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReportTable extends Migration
{
    public function up()
    {
        Schema::dropIfExists('report'); // Drops the table if it exists
        Schema::create('report', function (Blueprint $table) {
            $table->increments('id'); // Example primary key
            $table->string('title'); // Example field
            $table->text('description'); // Example field
            // Add other fields as necessary
            $table->timestamps(); // Adds created_at and updated_at timestamps
        });
    }

    public function down()
    {
        Schema::dropIfExists('report');
    }
}
