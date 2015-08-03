
var myArray = ["i", "love", "johnfrusciante"]

console.log(myArray[0]); 
console.log(myArray[1]); 
console.log(myArray[2]); 

	function change(){

			document.getElementById("el").innerHTML = "welcome."; 

		}



		// so the above change function works here, but not within my doc ready wrapper. why?


$(document).ready(
	function(){
		console.log("The document is ready!");





	$("button").click(function(){

			if($("#password").val() == "johnfrusciante"){      
				$("#waterdropsred").fadeOut();
				$("#waterdropsred").fadeIn(1000);     
			} 
			else {   
				alert('the password you entered is incorrect');  
			 } });


	// $("#password").change(function(){

	// 		if($("#password").val() == "johnfrusciante"){      
	// 			$("#waterdropsred").fadeOut();
	// 			$("#waterdropsred").fadeIn(60000);     
	// 		} 
	// 		else {   
	// 			alert('the password you entered is incorrect');  
	// 		 } });

	// $("input").select(function() {
	// 	$("input").after

	// }
			 
//trigger syntax
//$(selector).trigger(event,eventObj,param1,param2,...)






$("#waterdropsred").fadeOut();
$("#waterdropsred").fadeIn(10000);
//fade in over 10 seconds

$("#icecream").fadeOut();
$("#icecream").fadeIn(30000);

$("#rainingwhite").slideUp(1000); 
//Fade out over 1 second
//$("#rainingwhite").slideDown(4000); 
//Fade in over 4 seconds


// BODY HIDE AND SHOW SHOULD WORK
		// $("body").hide();

//$("#sparklingpink").animate( {   opacity: 0.25,   width: "70%" } , 30000 );

var animateMenu = function(){   $("#sparklingpink").animate( {opacity: .25, width:"70%" } , 6000) } 

$("#sparklingpink").show(animateMenu)
















		
	}

	);

//TRYING TO TOGGLE IMAGES!



// $('a.imageChanger').click(function()
// {
//     $('#spinningred img')each(function()
//     {
//         $(this).toggleClass('currentImage');
//         $(this).toggleClass('hiddenImage');
//     });
// });

// in html:

// <img class="currentimage" src="http://www.animatedimages.org/data/media/50/animated-flower-image-0033.gif">

// 			<img class="hiddenimage" src="http://www.animatedimages.org/data/media/50/animated-flower-image-0026.gif">









// this toggle button doesn't work for src images
// 		$("button").click(function(){
//     $("spinningred").toggle();
// });

// in html:

	// <button> </button> 



// this is a toggle img thing i found on the internet that also wasn't working for me

// // function toggleImgSrc(jQueryObj) {
// //     tmp = jQueryObj.attr('src');
// //     jQueryObj.attr('src', jQueryObj.attr('toggle_src'));
// //     jQueryObj.attr('toggle_src', tmp);
// // }

// //  toggle_src="http://www.animatedimages.org/data/media/50/animated-flower-image-0025.gif"
