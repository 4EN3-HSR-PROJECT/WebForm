
  $("#statForm").validate({
   submitHandler: function(form) {
      alert("Test");
      form.submit();
   }
});


/*function submitState (submitted) {
		   var removeClasses = 'ui-bar-a ui-bar-b ui-bar-c ui-bar-d ui-bar-e ui-btn-up-a ui-btn-up-b ui-btn-up-c ui-btn-up-d ui-btn-up-e';
		   $theme = submitted ? 'e' : 'a';
		   $text = submitted ? 'Submitted' : 'HSR Stats';
		   $.mobile.activePage.children('.ui-header').attr('data-theme', $theme).removeClass(removeClasses).addClass('ui-bar-' + $theme).children('h1').text($text);
		   $.mobile.activePage.children('.ui-header').children(submitted ? 'a' : 'e').removeClass(removeClasses).addClass('ui-btn-up-' + $theme);
		   $('#username').textinput(submitted ? 'disable' : 'enable');
		   $('#busnumber').textinput(submitted ? 'disable' : 'enable');
		   $('#location').textinput(submitted ? 'disable' : 'enable');
		   $('#busfull').textinput(submitted ? 'disable' : 'enable');
		   submitted ? $('input[name=radio-choice]').attr('disabled', 'disabled') : $('input[name=radio-choice]').removeAttr('disabled');
		   $('input[name=radio-choice]').checkboxradio('refresh'); 
		   document.getElementById('busfulllabel').style.color = submitted ? "grey" : "white";
   		   submitted ? $('input[name=submit]').attr('disabled', 'disabled') : $('input[name=submit]').removeAttr('disabled');
		   $('input[name=submit]').button('refresh'); 
   		   submitted ? $('input[name=reset]').attr('disabled', 'disabled') : $('input[name=reset]').removeAttr('disabled');
		   $('input[name=reset]').button('refresh');
		   submitted ? $("#okbutton").show() : $("#okbutton").hide();
};

function submita(){
	$.mobile.showPageLoadingMsg();
	$args = "username="+$('#username').val()+
		"&busnumber="+$('#busnumber').val()+
		"&location="+$('#location').val()+
		"&busfull="+$('#busfull').val()+
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
}*/






























