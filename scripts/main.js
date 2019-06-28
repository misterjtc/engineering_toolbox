$(function(){
    // Check if the function is ready
    console.log("I'm Ready");
    // JS for expanding collapsing sidebar tool menus
    $(".basExpander").on("click", function(){
        // $( ".basTools" ).fadeToggle( 1000, "linear" )
        // $(".basTools").toggleClass("expanded");
        $(".basTools").slideToggle();
        $(".basExpander > .expander").toggleClass("expanderDown");
        $(".basExpander").toggleClass("lit");
    });
    $(".genExpander").on("click", function(){
        // $(".genTools").toggleClass("expanded");
        $(".genTools").slideToggle();
        $(".genExpander > .expander").toggleClass("expanderDown");
        $(".genExpander").toggleClass("lit");
    });
    $(".alphaExpander").on("click", function(){
        // $(".alphaTools").toggleClass("expanded");
        $(".alphaTools").slideToggle();
        $(".alphaExpander > .expander").toggleClass("expanderDown");
        $(".alphaExpander").toggleClass("lit");
    });
    // JS for displaying current date on dashboard
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    document.getElementById("today").innerHTML = m + "/" + d + "/" + y;
    // JS for loading specific content onto the dashboard based on user selection
    $(".basJointTool").on("click", function(){
        $("#main").load("jointTool.html"); 
    });
    $(".basStressGen").on("click", function(){
        $("#main").load("wip.html"); 
    });
    $(".basPressTool").on("click", function(){
        $("#main").load("wip.html"); 
    });
    $(".basSpringTool").on("click", function(){
        $("#main").load("wip.html"); 
    });
    $(".tvTool").on("click", function(){
        $("#main").load("tvTool.html"); 
    });
});