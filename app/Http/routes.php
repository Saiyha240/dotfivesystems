<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get( '/', function () {
	return view( 'welcome' );
} );

Route::group( array( 'prefix' => 'api/v1', 'middleware' => ['api'] ), function () {

	Route::resource( 'projects', 'ProjectsController', array( 'only' => array( 'index' ) ) );
	Route::post( 'mail/contact', 'MailController@sendContactForm');
} );

Route::any( '{path?}', function () {
	return view( "index" );
} )->where( "path", ".+" );

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group( [ 'middleware' => [ 'web' ] ], function () {
	//
} );
