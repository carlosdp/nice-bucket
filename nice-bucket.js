$(document).ready(function() {
  $("#stream_pagelet").bind("DOMSubtreeModified", function() {
    $('.userContentWrapper').each(function(i){ 
      if($(this).children().text().match(/ ?ice ?-?bucket/i) != null){ 
        $(this).parent().hide(); 
      }  
    });
  });
});

