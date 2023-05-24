$(document).ready(function() {
    console.log("working")
    $("#color").on("click", function(){
        $("div.color ul").toggleClass("active");
    })
    $("div.color ul li").on("click", function(){
        var color=$(this).css("background-color")
        console.log(color)
        $("div.background").css("background-color", color)
    });
});