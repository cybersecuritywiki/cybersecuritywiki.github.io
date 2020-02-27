$( document ).ready(function() {
    $("#sidebar").hover(function(){
        $(this).css("width","300px");
    }, function(){
        $(this).css("width","100px")
    })
});