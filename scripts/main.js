$(function(){
    console.log("I'm Ready");
    $(".expander").on("click", function(){
        console.log('clicking');
        $(".basTools").toggleClass("expanded");
    });
});