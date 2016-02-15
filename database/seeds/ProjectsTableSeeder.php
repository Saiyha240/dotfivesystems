<?php

use App\Project;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class ProjectsTableSeeder extends Seeder {
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {
		//
		DB::table( 'projects' )->delete();

		for($i=0 ; $i < 12 ; $i++){
			Project::create([
				'name' => 'Project ' . $i,
				'details' => 'Details ' . $i,
				'technology' => 'Technology ' . $i,
				'image' => 'image ' . $i,
				'done_date' => Carbon::now()->addYear($i)
			]);
		}
	}
}
