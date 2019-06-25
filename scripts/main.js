$(function(){
    // Check if the function is ready
    console.log("I'm Ready");
    // JS for expanding collapsing sidebar tool menus
    $(".basExpander").on("click", function(){
        console.log('clicking');
        // $( ".basTools" ).fadeToggle( 1000, "linear" )
        $(".basTools").toggleClass("expanded", 300, "linear");
        $(".basExpander > .expander").toggleClass("expanderDown");
        $(".basExpander").toggleClass("lit");
    });
    $(".genExpander").on("click", function(){
        console.log('clicking');
        $(".genTools").toggleClass("expanded");
        $(".genExpander > .expander").toggleClass("expanderDown");
        $(".genExpander").toggleClass("lit");
    });
    $(".alphaExpander").on("click", function(){
        console.log('clicking');
        $(".alphaTools").toggleClass("expanded");
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
        $("#main").load("wip.html"); 
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