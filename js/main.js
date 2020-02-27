$( document ).ready(function() {

    $("#user-settings").slideUp();


    
    $("#sidebar").hover(function(){
        $(this).css("width","300px");
        $("#sidebar a").fadeIn();
        $("#sidebar i").fadeOut();
    }, function(){
        $(this).css("width","100px");
        $("#sidebar a").fadeOut("fast");
        $("#sidebar i").fadeIn("slow");
    })

    $("#navbar img").click(function(){
        $("#user-settings").slideToggle();

    })

});
