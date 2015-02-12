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
		var dir = "lyrics/" + json.artists[artist].dir +"/";
		var songs = (json.artists[artist].songs);
		for (song in songs){
			$("<li>" + songs[song] + "</li>").append("#" + json.artists[artist].name);
		}
		// var outout = "";
		// for ( lyric in lyricsFound ){
		// 	outout += lyric;
		// }
		// $('#' + json.artists[artist].name).html(outout);
	}
}


/*
$(document).ready(function(){
 var dir = “img/”;
var fileextension=”.jpg”;
 $.ajax({
 //This will retrieve the contents of the folder if the folder is configured as ‘browsable’
url: dir,
 success: function (data) {
 //Lsit all png file names in the page
 $(data).find(“a:contains(” + fileextension + “)”).each(function () {
 var filename = this.href.replace(window.location.host, “”).replace(“http:///”,”");
 $(“#view”).append($(“”));
 });
 }
 });
 })
*/
//jQuery.get( url [, data ] [, success ] [, dataType ] ) 
