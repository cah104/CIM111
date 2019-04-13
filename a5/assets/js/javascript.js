$(document).ready(function() {
	var hiding =false;

	
	$("#ingredients").click(function(){
  	if(hiding){

  		$("#ingredientList").show();
  		hiding =false
  	} else{
  		$("#ingredientList").hide();
  		hiding =true
  	}
	});

  var hiding =false;

  $("#directions").click(function(){
    if(hiding){

      $("#directionList").show();
      hiding =false
    } else{
      $("#directionList").hide();
      hiding =true
    }
  });

  var hiding =false;

  $("#tips").click(function(){
    if(hiding){

      $("#tipList").show();
      hiding =false
    } else{
      $("#tipList").hide();
      hiding =true
    }
  });

   $("#ingredients").mouseover(function(){
    $("#ingredients").css("background-color", "yellow");
  });
  $("#ingredients").mouseout(function(){
    $("#ingredients").css("background-color", "white");
  });

   $("#directions").mouseover(function(){
    $("#directions").css("background-color", "yellow");
  });
  $("#directions").mouseout(function(){
    $("#directions").css("background-color", "white");
  });

   $("#tips").mouseover(function(){
    $("#tips").css("background-color", "yellow");
  });
  $("#tips").mouseout(function(){
    $("#tips").css("background-color", "white");
  });
	

});