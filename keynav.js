document.write("<h1>Navigating a List with a Keyboard.</h1>")
 
function clickFunc(){
	window.location = $('a.current').attr('href');
}

function backFunc(){
	window.location = "../keynav/";
}

$(document).ready(function () {
	$(document.documentElement).keyup(function (event) {
		var direction = null;
		if (event.keyCode == 37) {
			backFunc();
		} else if (event.keyCode == 39) {
		  	clickFunc();
		} else if (event.keyCode == 38) {
		  	direction = 'prev';
		  	if ($('a.current').attr('id') == '#1'){
		  	} else{
			  	$('#wrap ul a.current').removeClass('current').parent()[direction]().find('a').addClass('current');
		  	} 	
		} else if (event.keyCode == 40) {
		  	direction = 'next';
		  	if ($('a.current').attr('id') == '#5'){
		  	} else{
			  	$('#wrap ul a.current').removeClass('current').parent()[direction]().find('a').addClass('current');
		  	} 				
		} 	
	});
});