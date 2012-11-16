$(document).on("pageshow", "#statPage", function() {

	$('a#okbutton').click( function() {
		submitState(false);
		$('input[name=reset]').click();
	});

	$("#okbutton").hide();

	$("#statForm").validate({
	   submitHandler: function(form) {
		$.mobile.showPageLoadingMsg();
                setCookie("username", $('#username').val(), 1);
		$args = "username="+$('#username').val()+
			//"&busnumber="+$('#busnumber').val()+
			"&busnumber="+$('input:radio[name=busnumber]:checked').val()+
			"&location="+$('#location').val()+
			//"&busfull="+$('#busfull').val()+
			"&busfull="+$('input:radio[name=busfull]:checked').val()+
			"&radio-choice="+$('input:radio[name=radio-choice]:checked').val();
                jQuery.ajax({
	      		type: "POST",
	                url: "process.php",
      	                data: $args,
	                success: function(result) {   
		        	submitState(true);
		   		$.mobile.hidePageLoadingMsg();
	      		},
			error: function(e){  
		                $.mobile.hidePageLoadingMsg();
                                alert('Error: ' + e);
                        } 
	        });	
	   }
	});

});

function submitState (submitted) {
		   var removeClasses = 'ui-bar-a ui-bar-b ui-bar-c ui-bar-d ui-bar-e ui-btn-up-a ui-btn-up-b ui-btn-up-c ui-btn-up-d ui-btn-up-e';
		   $theme = submitted ? 'e' : 'a';
		   $text = submitted ? 'Submitted' : 'HSR Stats';
		   $.mobile.activePage.children('.ui-header').attr('data-theme', $theme).removeClass(removeClasses).addClass('ui-bar-' + $theme).children('h1').text($text);
		   $.mobile.activePage.children('.ui-header').children(submitted ? 'a' : 'e').removeClass(removeClasses).addClass('ui-btn-up-' + $theme);
		   $('#username').textinput(submitted ? 'disable' : 'enable');
		   //$('#busnumber').textinput(submitted ? 'disable' : 'enable');
		   $('#location').textinput(submitted ? 'disable' : 'enable');
		   //$('#busfull').textinput(submitted ? 'disable' : 'enable');
		   submitted ? $('input[name=busnumber]').attr('disabled', 'disabled') : $('input[name=busnumber]').removeAttr('disabled');
		   $('input[name=busnumber]').checkboxradio('refresh'); 
		   submitted ? $('input[name=busfull]').attr('disabled', 'disabled') : $('input[name=busfull]').removeAttr('disabled');
		   $('input[name=busfull]').checkboxradio('refresh'); 
		   submitted ? $('input[name=radio-choice]').attr('disabled', 'disabled') : $('input[name=radio-choice]').removeAttr('disabled');
		   $('input[name=radio-choice]').checkboxradio('refresh'); 
		   document.getElementById('busfulllabel').style.color = submitted ? "grey" : "white";
   		   submitted ? $('#submit').attr('disabled', 'disabled') : $('#submit').removeAttr('disabled');
   		   submitted ? $('#reset').attr('disabled', 'disabled') : $('#reset').removeAttr('disabled');
		   $('#submit').button('refresh');
		   $('#reset').button('refresh');
		   submitted ? $("#okbutton").show() : $("#okbutton").hide();
};

function setCookie(c_name, value, exdays) {
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name) {
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++) {
	  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
	  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
	  x=x.replace(/^\s+|\s+$/g,"");
	  if (x==c_name) {
	    return unescape(y);
	  }
	}
}
