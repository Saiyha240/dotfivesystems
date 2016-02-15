<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProjectsTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		//
		Schema::create( "projects", function ( Blueprint $table ) {
			$table->increments( 'id' );
			$table->string('name');
			$table->text('details');
			$table->string('technology');
			$table->text('image');
			$table->date('done_date');
			$table->timestamps();
		} );
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		//
		Schema::drop('projects');
	}
}
