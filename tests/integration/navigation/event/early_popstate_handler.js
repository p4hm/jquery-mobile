define( [ "jquery" ], function( $ ) {

$( window ).on( "popstate", function( event ) {
	if ( window.preventDefaultForNextPopstate ) {
		event.preventDefault();
	}
} );

} );
