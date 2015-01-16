$(function(){

	  // if (window.print) {
   //              document.write('<form><input data-href=".img/octa-chaine6-a.png" type=button name=Imprimer value="Imprimer" onClick="window.print()"></form>');
   //          }
	
})

function chercherTag(){
	var monTag = $('#tag').val();
	flickrSearch(monTag);
	colourSearch(monTag);
	motifsSearch(monTag);
	getGoogleFonts();
	$("#choixUser").fadeIn('slow');
	$("#threeViz").fadeIn('slow');
	$("#demo").fadeIn('slow');
	$("#impression").fadeIn('slow');
}

function flickrSearch(tag){

	var jsonURL = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=';
	var formatJSON = '&tagmode=ANY&format=json&jsoncallback=?';
	
	
	var adresseComplete = jsonURL + tag + formatJSON;
	$('#flickr').html('');
	
	$.getJSON(adresseComplete, function(data){
	
		$.each(data.items, function(i, photo){
			if(i<6){
				var photoHTML = '<span>';
				
				photoHTML += '<img onclick="setOnModel(this);" src="' + photo.media.m.replace('_m', '_s') + '"></span>';
				
				$('#flickr').append(photoHTML);
			}
			else
				return false;
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
			if(i<6){
				var paletteHTML = '<span>';
				
				paletteHTML += '<img onclick="setOnModel(this);" src="' + motif.imageUrl + '"></span>';
				
				$('#motifs').append(paletteHTML);
			}
			else
				return false;
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
			if(i<6){
			var paletteHTML = '<span>';
			
			paletteHTML += '<img onclick="setOnModel(this);" src="' + palette.imageUrl + '"></span>';
			
			$('#palettes').append(paletteHTML);
			}
			else
				return false;			
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

function afficher_cacher()
{
	$("#texte").toggle();
}

function imprimer(){

	if (window.print) {
        document.write("<form><button onClick='window.print()'>Imprimer</button><br/><img src='octa-chain6-a.png'></form>");
    }

}


