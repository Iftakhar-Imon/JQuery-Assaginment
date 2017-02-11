$(document).ready(function(){
	
  var validemail=function(elementValue){
 	 var emailPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
     return emailPattern.test(elementValue);
 }
$("#email").keyup(function(){
   var value=$(this).val();
   var valid=validemail(value);
   if(!valid){
   	 $("#msg1").removeClass("positive");
     $("#msg1").text("not valid").addClass("negative");
   }
   else{
   	$("#msg1").removeClass("negative");
   	$("#msg1").text("valid").addClass("positive");
   }
});

$("#name,#name1").keyup(function(){

    var name=$("#name").val();
    var name1=$("#name1").val();
    $("#name3").val(name+" "+name1);
    if(name.length>10){
        $("#msg2").show();
        $("#msg2").removeClass("positive"); 
    	$("#msg2").text("maxium limit 10 charecter").addClass("negative");
    	// $("#msg").removeClass("red");
    	// $("#msg").addClass("green");

    }
    else{
    	$("#msg2").removeClass("negative");
    	$("#msg2").addClass("positive");
    	$("#msg2").hide();
    }

     if(name1.length>10){
        $("#msg3").show();
        $("#msg3").removeClass("positive"); 
    	$("#msg3").text("maxium limit 10 charecter").addClass("negative");
    	// $("#msg").removeClass("red");
    	// $("#msg").addClass("green");

    }
    else{
    	$("#msg3").removeClass("negative");
    	$("#msg3").addClass("positive");
    	$("#msg3").hide();
    }
 });
 
$(function() {
    $("#pass2").keyup(function() {
        var pass1 = $("#pass1").val();
        $("#checkpassword").html(pass1 == $(this).val() ? "Passwords match.": "Passwords do not match!").addClass("red");
    });

});
 
 $(function(){
 	$("#draggable1,#draggable2").draggable({ revert: "valid" });
 	  $("#dropper").droppable({ drop: function( event, ui){
 		 $(this).css("background-color","green");
 	     }
         });

     });

 $("#register").click(function(){
     var name=$("#name").val();
     var name1=$("#name1").val();
     var email=$("#email").val();
     var pass1=$("#pass1").val();
     var pass2= $("#pass2").val();
       if( name ==''){
			$("#msg2").text("Field must be required!!").addClass("negative");
		}
		if( name1 ==''){
			$("#msg3").text("Field must be required!!").addClass("negative");
		}

		if( email ==''){
			$("#msg1").text("Field must be required!!").addClass("negative");
		}

		if( pass1 ==''){
			$("#msg5").text("Field must be required!!").addClass("negative");
		}
		if( pass2 ==''){
			$("#msg6").text("Field must be required!!").addClass("negative");
		}

});

});