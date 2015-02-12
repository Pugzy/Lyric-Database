var jqXHR = $.ajax({
	url: "artists.json",
	dataType: "text",
	processData: false,
	success: function(data){
		var json = $.parseJSON(data);
		doStuffToJSON (json);
	}
});

function doStuffToJSON( json ){
	for (artist in json.artists){ // 0 - amount of artists
		//alert ( json.artists[artist].name + " :: " + json.artists[artist].dir );
		//Name used to update DIV
		//dir used to populate DIV
	}
}

//jQuery.get( url [, data ] [, success ] [, dataType ] ) 
/*
 $.ajax({
                    url: "data.json",
                    //force to handle it as text
                    dataType: "text",
                    success: function(data) {
                        
                        //data downloaded so we call parseJSON function 
                        //and pass downloaded data
                        var json = $.parseJSON(data);
                        //now json variable contains data in json format
                        //let's display a few items
                        $('#results').html('Plugin name: ' + json.name + '<br />Author: ' + json.author.name);
                    }
                });
*/
