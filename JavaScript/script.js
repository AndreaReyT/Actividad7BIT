
$(document).ready(function(){

    $(document).ready(function(){
        $('.fixed-action-btn').floatingActionButton();
      });

    $('.titulo_1').mouseover(function(){
        $(this).css("color", "grey");
      });
    
    $('.titulo_1').mouseout(function(){
        $(this).css("color", "white").css("background", "grey");
      });
    
});
