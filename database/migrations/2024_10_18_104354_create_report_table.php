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
            $table->increments('Report_ID'); // Example primary key
            $table->string('title'); // Example field
            $table->text('description'); // Example field
            $table->integer('Duty_ID'); // Foreign Key column for Duty_ID
            // Add other fields as necessary
            $table->index('Duty_ID', 'Lecturer_fk');
            $table->timestamps(); // Adds created_at and updated_at timestamps
        });
    }

    public function down()
    {
        Schema::dropIfExists('report');
    }
}
