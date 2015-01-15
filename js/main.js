$(function(){
	
})

function chercherTag(){
	var monTag = $('#tag').val();
	flickrSearch(monTag);
	colourSearch(monTag);
	motifsSearch(monTag);
	getGoogleFonts();
	$("#choixUser").fadeIn('slow');
}

function flickrSearch(tag){

	var jsonURL = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=';
	var formatJSON = '&tagmode=ANY&format=json&jsoncallback=?';
	
	
	var adresseComplete = jsonURL + tag + formatJSON;
	$('#flickr').html('');
	
	$.getJSON(adresseComplete, function(data){
	
		$.each(data.items, function(i, photo){
			
			var photoHTML = '<span>';
			
			photoHTML += '<img src="' + photo.media.m.replace('_m', '_s') + '"></span>';
			
			$('#flickr').append(photoHTML);
						
		});
	});
}

function motifsSearch(tag){

	$('#motifs').html('');
	var jsonURL = 'http://www.colourlovers.com/api/patterns?keywords=';
	var formatJSON = '&format=json&jsoncallback=OK';
	
	var OK = function(data){
		alert(data);
	}
	
	var adresseComplete = jsonURL + tag + formatJSON;
	
	$.getJSON(adresseComplete, function(data){
	
		$.each(data, function(i, motif){
			
			var paletteHTML = '<span>';
			
			paletteHTML += '<img src="' + motif.imageUrl + '"></span>';
			
			$('#motifs').append(paletteHTML);
						
		});
	});

}

function colourSearch(tag){

	$('#palettes').html('');
	var jsonURL = 'http://www.colourlovers.com/api/palettes?keywords=';
	var formatJSON = '&format=json&jsoncallback=OK';
	
	var OK = function(data){
		alert(data);
	}
	
	var adresseComplete = jsonURL + tag + formatJSON;
	
	$.getJSON(adresseComplete, function(data){
	
		$.each(data, function(i, palette){
			
			var paletteHTML = '<span>';
			
			paletteHTML += '<img src="' + palette.imageUrl + '"></span>';
			
			$('#palettes').append(paletteHTML);
						
		});
	});

}

function getGoogleFonts(){
	
	var jsonURL = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyA6FdS9y6p7u3Ex9MrkHk0ZbbyzBVINW2E';
	var formatJSON = '&format=json&jsoncallback=OK';
	
	var OK = function(data){
		alert(data);
	}
	
	var adresseComplete = jsonURL + formatJSON;
	
	$.getJSON(adresseComplete, function(data){
	
		$.each(data.items, function(i, fonts){
			
			$('#typosSel').append("<option>"+fonts.family+"</option>");
						
		});
	});
}
