<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller {
	//
	public function sendContactForm( Request $request ) {
		$data = $request->only( [ 'name', 'email', 'cMessage' ] );

		Mail::queue( 'email.contact', $data, function ( $m ) use ( $data ) {
			$m->to( "mark5cinco92@gmail.com", "Mark Cinco" )
			  ->subject( "[Dotfivesystems] Contact Request" );
		} );

		return response()->json( $data, 200 );
	}
}
