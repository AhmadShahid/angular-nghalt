var app=angular.module('ngHalt',[]);
app.directive('ngHalt', haltCharacter );
	  haltCharacter.$inject = ['$compile'];
	  function haltCharacter($compile) {

		    return {
		      restrict: 'AE',
		      require: 'ngModel',
		      link: link
		    };
	 }

 	function link( scope , element , attr,ngModel ){
 		  var userInput = {
 		  	alphanum:true,
 		  	value: '=ngModel',
 		  	alpha:true,
 		  }

 		  var userInput = _stringToObject(attr.ngHalt);
 		  // Extend our default options with user provided options
	      scope.options = angular.extend({

	          // Tests
	          // "A word character": a character from a-z, A-Z, 0-9, including the _ (underscore) character.
	          alpha: false, // Find A-Z
	          number: false, // Find 0-9
	          special: false, // Find a non-word character or the _ (underscore) character
	          allowSpace: true,
	          maxlength: 50,
	          regex:false,

	      }, userInput);


		  element.on('keypress',function(e){
		  		var countChar = element.val().length;
				var regexPatt = _buildRegex( scope.options );
				var regexPattern = new RegExp( regexPatt );
				validateLength( e, scope.options,countChar );
				validateExpression(e,regexPattern);
    		
		  });
            	
 	}
	
 	/*
 	* @Name:          _stringToObject
 	* @Description:   Convert string to object
 	* @Param:         string
 	* @return         Object
 	 */
	function _stringToObject(string){
		var properties = string.split(',');
		var obj = {};
		properties.forEach(function(property) {
		    var tup = property.split(':');
		    obj[tup[0]] = tup[1];
		});
		return obj;
	}

	/*
 	* @Name:          _buildRegex
 	* @Description:   give you a specific reqular express based on condition
 	* @Param:         Object
 	* @return         regex string
 	 */

	function _buildRegex( options ) {
		var regex;
		
		if( options.regex != false ){
			return options.regex;
		}

		if ( options.alpha && options.number && options.special ) {
			regex = "^[A-Za-z0-9_@./#&+-]*$";
		}

		if ( options.alpha && options.number  && !options.special ){
			regex = "^[A-Za-z0-9]*$";
		}

		if ( options.alpha && !options.number && !options.special){
			regex = "^[A-Za-z]*$";
		}

		if ( !options.alpha && options.number && !options.special){
			regex = "^[0-9]*$";
		}

		if( options.allowSpace ) {
			index  = indexPosition( regex ,"]" );
			regex =  appendString(regex, index , " ");
		}

		return regex;
	}

	function validateExpression(e, patrn) {
	    var code = e.keyCode ? e.keyCode : e.which; // Get the key code. 
	    // Don't validate the input if below arrow, delete and backspace keys were pressed 

	    if (code == 39 || code == 8 || code == 46 || code == 37 || code == 38) { // Left / Up / Right / Down Arrow, Backspace, Delete keys
	        return;
	    }
	    var pressedKey = String.fromCharCode(code); // Find the key pressed.                  
	    if ( !pressedKey.match(patrn) ) { // Check if it's a alpanumeric char or not.                 
	        e.preventDefault(); // If it is not then prevent the event from happening. 
	    }
   }

    /*
 	* @Name:          appendString
 	* @Description:   add string to another string at specific index
 	* @Param:         string(in which you append string),index(position where you add string),str( A string to append )
 	* @return         String 
 	 */
   function appendString(src, index, str) {
    	return src.substr(0, index) + str + src.substr(index)
   }

   	/*
 	* @Name:          indexPosition
 	* @Description:   find a index number
 	* @Param:         string and search:the value you search in a string
 	* @return         number (index position)
 	 */
   function indexPosition( str , search ){
   		return str.indexOf( search );
   }


   function validateLength( e, options , countChar ) {

   		if ( countChar >= options.maxlength ) {
   			return e.preventDefault();
   		}
   }

 

