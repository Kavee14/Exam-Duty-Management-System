<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVoucherTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('voucher'); // Drop the table if it exists

        Schema::create('voucher', function (Blueprint $table) {
            $table->increments('Voucher_ID'); // Auto-incrementing primary key
            $table->unsignedInteger('Duty_ID'); // Unsigned integer for foreign key

            // Define foreign key constraint
            $table->foreign('Duty_ID')->references('id')->on('duties')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('voucher'); // Drop the table on rollback
    }
}
