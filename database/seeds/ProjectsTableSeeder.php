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

		$projects = [
			['name' => 'BloggedinAsean', 'details' => '', 'technology'=> 'HTML, CSS, JavaScript, PHP, Wordpress, Laravel', 'image'=> asset('build/img/10.jpg'), 'url' => '', 'done_date'=> Carbon::now()->year = 2014, 'order' => 0],
			['name' => 'BeyondMedyo', 'details' => '', 'technology'=> 'HTML, CSS, JavaScript, PHP, Wordpress', 'image'=> asset('build/img/14.jpg'), 'url' => '', 'done_date'=> Carbon::now()->year = 2015, 'order' => 0],
			['name' => 'TugonPH', 'details' => '', 'technology'=> 'HTML, CSS, JavaScript, PHP, Wordpress', 'image'=> asset('build/img/1.jpg'), 'url' => '', 'done_date'=> Carbon::now()->year = 2013, 'order' => 0],
			['name' => 'Roxy Navarro', 'details' => '', 'technology'=> 'HTML, CSS, JavaScript, PHP, Wordpress', 'image'=> asset('build/img/16.jpg'), 'url' => '', 'done_date'=> Carbon::now()->year = 2015, 'order' => 0],
			['name' => 'EightDragonMetal', 'details' => '', 'technology'=> 'HTML, CSS, JavaScript, PHP', 'image'=> asset('build/img/19.jpg'), 'url' => '', 'done_date'=> Carbon::now()->year = 2015, 'order' => 0],
			['name' => 'Charliethelabel', 'details' => '', 'technology'=> 'HTML, CSS, JavaScript, PHP, Wordpress', 'image'=> asset('build/img/18.jpg'), 'url' => '', 'done_date'=> Carbon::now()->year = 2015, 'order' => 0],
			['name' => 'Peso Sense', 'details' => '', 'technology'=> 'HTML, CSS, JavaScript, PHP, Wordpress', 'image'=> asset('build/img/13.jpg'), 'url' => '', 'done_date'=> Carbon::now()->year = 2015, 'order' => 0],
			['name' => 'Van Liu', 'details' => '', 'technology'=> 'HTML, CSS, JavaScript, PHP, Wordpress', 'image'=> asset('build/img/15.jpg'), 'url' => '', 'done_date'=> Carbon::now()->year = 2015, 'order' => 0],
			['name' => 'Floreia', 'details' => '', 'technology'=> 'HTML, CSS, JavaScript, PHP, Wordpress', 'image'=> asset('build/img/2.jpg'), 'url' => '', 'done_date'=> Carbon::now()->year = 2014, 'order' => 0],
			['name' => 'Natures Legacy', 'details' => '', 'technology'=> 'HTML, CSS, JavaScript, PHP, Wordpress', 'image'=> asset('build/img/17.jpg'), 'url' => '', 'done_date'=> Carbon::now()->year = 2014, 'order' => 0],
			['name' => 'WearGugu', 'details' => '', 'technology'=> 'HTML, CSS, JavaScript, PHP, Wordpress', 'image'=> asset('build/img/12.jpg'), 'url' => '', 'done_date'=> Carbon::now()->year = 2014, 'order' => 0],
			['name' => 'Good Shepherd', 'details' => '', 'technology'=> 'HTML, CSS, JavaScript, PHP, Wordpress', 'image'=> asset('build/img/11.jpg'), 'url' => '', 'done_date'=> Carbon::now()->year = 2014, 'order' => 0],
			['name' => 'Hapinoy', 'details' => '', 'technology'=> 'HTML, CSS, JavaScript, PHP, Wordpress', 'image'=> asset('build/img/4.jpg'), 'url' => '', 'done_date'=> Carbon::now()->year = 2014, 'order' => 0],
			['name' => 'GoExplore', 'details' => '', 'technology'=> 'HTML, CSS, JavaScript, PHP, Wordpress', 'image'=> asset('build/img/6.jpg'), 'url' => '', 'done_date'=> Carbon::now()->year = 2013, 'order' => 0],
		];

		collect( $projects )->each(function($project){
			Project::create($project);
		});
	}
}
