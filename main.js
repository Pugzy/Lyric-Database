var jqXHR = $.get( "artists.json", function ( data){
	alert( data );
}, "json");

//jQuery.get( url [, data ] [, success ] [, dataType ] ) 
