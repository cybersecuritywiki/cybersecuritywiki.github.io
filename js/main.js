$( document ).ready(function() {

    $("#user-settings").slideUp();


    
    $("#sidebar").hover(function(){
        $(this).css("width","250px");
        $("#sidebar-links li").css("opacity","1");
        $("#sidebar-icons").css("opacity","0");
    }, function(){
        $(this).css("width","100px");
        $("#sidebar-links li").css("opacity","0");
        $("#sidebar-icons").css("opacity","1");
    })

    $("#navbar img").click(function(){
        $("#user-settings").slideToggle("300");

    })

});
