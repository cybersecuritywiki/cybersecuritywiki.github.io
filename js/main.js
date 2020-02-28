$( document ).ready(function() {

    $("#user-settings").slideUp();
    
    $("#sidebar").hover(function(){
        $(this).css("width","250px");
        $("#sidebar-links li").css("opacity","1");
        $("#sidebar-icons").stop().fadeOut();
    }, function(){
        $(this).css("width","100px");
        $("#sidebar-links li").css("opacity","0");
        $("#sidebar-icons").stop().fadeIn();
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
