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
			['name' => 'Erwin Valencia', 'details' => '', 'technology'=> 'HTML, CSS, JavaScript, PHP, Wordpress', 'image'=> asset('build/img/21.jpg'), 'url' => 'http://erwinvalencia.com', 'done_date'=> Carbon::now()->year = 2016, 'order' => 0],
			['name' => 'i2Can', 'details' => '', 'technology'=> 'HTML, CSS, JavaScript, PHP, Wordpress', 'image'=> asset('build/img/20.jpg'), 'url' => 'http://i2can.in', 'done_date'=> Carbon::now()->year = 2016, 'order' => 0],
			['name' => 'xChange', 'details' => '', 'technology'=> 'HTML, CSS, JavaScript, PHP, Wordpress', 'image'=> asset('build/img/22.jpg'), 'url' => 'http://xchange.com', 'done_date'=> Carbon::now()->year = 2016, 'order' => 0],
			['name' => 'BloggedinAsean', 'details' => '', 'technology'=> 'HTML, CSS, JavaScript, PHP, Wordpress', 'image'=> asset('build/img/10.jpg'), 'url' => 'http://bloggedinasean.com', 'done_date'=> Carbon::now()->year = 2014, 'order' => 0],
			['name' => 'BeyondMedyo', 'details' => '', 'technology'=> 'HTML, CSS, JavaScript, PHP, Wordpress', 'image'=> asset('build/img/14.jpg'), 'url' => 'http://beyondmedyo.com', 'done_date'=> Carbon::now()->year = 2015, 'order' => 0],
			['name' => 'TugonPH', 'details' => '', 'technology'=> 'HTML, CSS, JavaScript, PHP, Wordpress', 'image'=> asset('build/img/1.jpg'), 'url' => 'http://home.tugon.org', 'done_date'=> Carbon::now()->year = 2013, 'order' => 0],
			['name' => 'Roxy Navarro', 'details' => '', 'technology'=> 'HTML, CSS, JavaScript, PHP, Wordpress', 'image'=> asset('build/img/16.jpg'), 'url' => 'http://roxynavarro.com', 'done_date'=> Carbon::now()->year = 2015, 'order' => 0],
			['name' => 'EightDragonMetal', 'details' => '', 'technology'=> 'HTML, CSS, JavaScript, PHP', 'image'=> asset('build/img/19.jpg'), 'url' => 'http://eightdragonmetal.com', 'done_date'=> Carbon::now()->year = 2015, 'order' => 0],
			['name' => 'Charliethelabel', 'details' => '', 'technology'=> 'HTML, CSS, JavaScript, PHP, Wordpress', 'image'=> asset('build/img/18.jpg'), 'url' => 'http://charliethelabel.com', 'done_date'=> Carbon::now()->year = 2015, 'order' => 0],
			['name' => 'Peso Sense', 'details' => '', 'technology'=> 'HTML, CSS, JavaScript, PHP, Wordpress', 'image'=> asset('build/img/13.jpg'), 'url' => 'http://pesosense.com', 'done_date'=> Carbon::now()->year = 2015, 'order' => 0],
			['name' => 'Van Liu', 'details' => '', 'technology'=> 'HTML, CSS, JavaScript, PHP, Wordpress', 'image'=> asset('build/img/15.jpg'), 'url' => 'http://vanliu.com', 'done_date'=> Carbon::now()->year = 2015, 'order' => 0],
			['name' => 'Floreia', 'details' => '', 'technology'=> 'HTML, CSS, JavaScript, PHP, Wordpress', 'image'=> asset('build/img/2.jpg'), 'url' => 'http://floreia.com', 'done_date'=> Carbon::now()->year = 2014, 'order' => 0],
//			['name' => 'Natures Legacy', 'details' => '', 'technology'=> 'HTML, CSS, JavaScript, PHP, Wordpress', 'image'=> asset('build/img/17.jpg'), 'url' => 'http://natureslegacy.com', 'done_date'=> Carbon::now()->year = 2014, 'order' => 0],
//			['name' => 'WearGugu', 'details' => '', 'technology'=> 'HTML, CSS, JavaScript, PHP, Wordpress', 'image'=> asset('build/img/12.jpg'), 'url' => 'http://weargugu.com', 'done_date'=> Carbon::now()->year = 2014, 'order' => 0],
			['name' => 'Good Shepherd', 'details' => '', 'technology'=> 'HTML, CSS, JavaScript, PHP, Wordpress', 'image'=> asset('build/img/11.jpg'), 'url' => 'http://goodshepherd.com', 'done_date'=> Carbon::now()->year = 2014, 'order' => 0],
			['name' => 'Hapinoy', 'details' => '', 'technology'=> 'HTML, CSS, JavaScript, PHP, Wordpress', 'image'=> asset('build/img/4.jpg'), 'url' => 'http://hapinoy.com', 'done_date'=> Carbon::now()->year = 2014, 'order' => 0],
			['name' => 'GoExplore', 'details' => '', 'technology'=> 'HTML, CSS, JavaScript, PHP, Wordpress', 'image'=> asset('build/img/6.jpg'), 'url' => 'http://goexploreph.com', 'done_date'=> Carbon::now()->year = 2013, 'order' => 0],
		];

		collect( $projects )->each(function($project){
			Project::create($project);
		});
	}
}
