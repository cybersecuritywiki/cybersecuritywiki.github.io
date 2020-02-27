$( document ).ready(function() {

    $("#user-settings").slideUp();


    $("#sidebar").hover(function(){
        $(this).css("width","300px");
    }, function(){
        $(this).css("width","100px")
    })

    $("#navbar img").click(function(){
        $("#user-settings").slideToggle();
    })


});
