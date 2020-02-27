$( document ).ready(function() {

    $("#user-settings").slideUp();
    
    $("#sidebar").hover(function(){
        $(this).css("width","250px");
        $("#sidebar-links li").css("opacity","1");
        $("#sidebar-icons").css("opacity","0");
        setTimeout(function(){
            $("#sidebar-icons").css("display","none");
          }, 400);
    }, function(){
        $("#sidebar-icons").css("display","block");
        $(this).css("width","100px");
        $("#sidebar-links li").css("opacity","0");
        setTimeout(function(){
            $("#sidebar-icons").css("opacity","1")
          }, 100);
    })

    $("#sidebar-links li").hover(function(){
        $(this).css("background-color","rgba(226, 226, 226, 0.11)")
    }, function(){
        $(this).css("background-color","")
    })

    $("#navbar img").click(function(){
        $("#user-settings").slideToggle("300");
    })

});
