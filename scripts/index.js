$("#float").click(function() {
  //Random selection
  var rand = Math.random();
  var path = "";
  if(rand <= .33)
    path = collection["images"][0]["image_src"];
  else if (rand <= .66)
    path = collection["images"][1]["image_src"];
  else
    path = collection["images"][2]["image_src"];

  //Change existing
  $("img").css({float: "left"});

  //Append
  $("#container").append("<img src='" + path + "'>").css({float: "left"});
});

$("#block").click(function() {
  //Random selection
  var rand = Math.random();
  var path = "";
  if(rand <= .33)
    path = collection["images"][0]["image_src"];
  else if (rand <= .66)
    path = collection["images"][1]["image_src"];
  else
    path = collection["images"][2]["image_src"];

  //Change existing
  $("img").css({display: "block"});

  //Append
  $("#container").append("<img src='" + path + "'>").css({display: "block"});
});

$("#reset").click(function() {
  $("img").remove();
  $("#container").append('<iframe width="300" height="200" src="http://www.youtube.com/embed/jofNR_WkoCE?start=39" frameborder="0" allowfullscreen></iframe>');
});
