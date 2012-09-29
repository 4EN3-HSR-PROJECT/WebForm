<!DOCTYPE html> 
<html>
   <head>
      <title>My Page</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scaleable=no" />
      <link rel="stylesheet" href="css/jquery.mobile-1.2.0-rc.2.min.css" />
      <link rel="stylesheet" href="css/main.css" />
      <script src="js/jquery-1.8.1.min.js"></script>
      <script src="js/jquery.mobile-1.2.0-rc.2.min.js"></script>
      <script src="http://maps.google.com/maps/api/js?sensor=true"></script>
      <script type="text/javascript" src="js/jquery.validate.js"></script>-->
      <script type="text/javascript" src="js/main.js"></script>
      <script type="text/javascript">

         function findGeo() {
         	if(navigator.geolocation) {
         		navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {enableHighAccuracy:true, timeout:60000});
         	} else {
                			alert("Geolocation API is not supported in your browser.");
         	}
         };
         
         function successCallback(position){
         	// set up the Geocoder object
           			var geocoder = new google.maps.Geocoder();
         
         	 // turn coordinates into an object
         	 var yourLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
         
         		 // find out info about our location
         	 geocoder.geocode({ 'latLng': yourLocation }, function (results, status) {
         	         if (status == google.maps.GeocoderStatus.OK) {
         		         if (results[0]) {
         	         		document.getElementById("location").value = results[0].formatted_address;
         		         } else {
         		                error('Google did not return any results.');
         		         }
         	        } else {
         		         error("Reverse Geocoding failed due to: " + status);
         	        }
         	 });
                       }; 
         
         function errorCallback(error){
         	var msg = "";
         	switch(error.code) {
         		case error.PERMISSION_DENIED:
         			msg = "The website does not have permission to use geolocation";
         			break;
         		case error.POSITION_UNAVAILABLE:
         			msg = "The current position could not be obtained";
         			break;
         		case error.PERMISSION_DENIED_TIMEOUT:
         			msg = "The permission could not be retrieved within timeout";
         			break;
         		default:
         			msg = "Error occured : " + error.code.toString();
         	}
         	document.getElementById("location").value = msg;
         };
         
         function resetForm() {
             document.getElementById('radio-choice-0').click();
             $('input[name=radio-choice]').checkboxradio('refresh');
             $('#busfull').val('0').slider('refresh');
         };

      </script>
   </head>
   <body onload="findGeo();">
      <div data-role="page" data-theme="a" id="statPage">
         	<div data-role="header" class="ui-header" data-position="fixed" id="header">
            <h1>HSR Stats</h1>
	    <a id="okbutton" data-icon="check">Ok</a>
            </div>
         <div data-role="content">
            <form data-ajax="true" name="data_entry" action="" method="post" id="statForm">
               <fieldset data-role="fieldcontain"> 
                  <label for="username" class="ui-hidden-accessible">Username:</label>
                  <input type="text" class="required" minlength="5" name="username" id="username" placeholder="Username" />
               </fieldset>
               <fieldset data-role="fieldcontain"> 
                  <label for="busnumber" class="ui-hidden-accessible">Bus number:</label>
                  <input type="text" class="required" minlength="5" name="busnumber" id="busnumber" placeholder="Bus number" />
               </fieldset>
               <fieldset data-role="fieldcontain"> 
                  <label for="location" class="ui-hidden-accessible">Location:</label>
                  <input type="text" class="required" minlength="5" name="location" id="location" placeholder="Location" />
               </fieldset>
               <fieldset data-role="fieldcontain"> 
                  <label id="busfulllabel" for="busfull">How full is the bus:</label>
                  <input type="range" name="busfull" id="busfull" value="0" min="0" max="100" data-highlight="true" />
               </fieldset>
                  <div data-role="fieldcontain" style="text-align: center;border:0">
                     <fieldset data-role="controlgroup" data-type="horizontal">
                        <input type="radio" name="radio-choice" id="radio-choice-0" value="choice-1" checked="checked" />
                        <label for="radio-choice-0">Off the bus</label>
                        <input type="radio" name="radio-choice" id="radio-choice-1" value="choice-2" />
                        <label for="radio-choice-1">On the bus</label>	    
                     </fieldset>
                  </div>
                  <input name="submit" id="submit" type="submit" value="Submit"/>
	          <input name="reset" id="reset" type="reset" data-theme="r" value="Reset" onClick="resetForm();" />

            </form>
         </div>
      </div>
   </body>
</html>
