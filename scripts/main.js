$(function(){
    // Check if the function is ready
    console.log("I'm Ready");
    // Load the dashboard on site load
    $("#main").load("dashboard.html");
    $(".dashSelector").addClass("litLink"); 
    // Set margin for main content switch based on height of header
    var $headerHeight = $("header").height()
    console.log($headerHeight);
    var $asideWidth = $('aside').width();
    console.log($asideWidth);
    $('.centralContent').css('margin-top',$headerHeight);
    $(".minify").on("click", function(){
        // Close all tool lists and remove expansion formatting
        var $asideWidth = $('aside').width();
        $(".basExpander > .expander").removeClass("expanderDown");
        $(".basExpander").removeClass("lit");
        $(".genExpander > .expander").removeClass("expanderDown");
        $(".genExpander").removeClass("lit");
        $(".alphaExpander > .expander").removeClass("expanderDown");
        $(".alphaExpander").removeClass("lit");
        $(".basTools").slideUp();
        $(".genTools").slideUp();
        $(".alphaTools").slideUp();
        console.log($asideWidth);
        // If the nav bar is less than 100px, expand it and do some formatting
        if ( $asideWidth < 110) {
            $('aside').animate({width: "16%"}, 400, "linear");
            $('header').animate({width: "84%", marginLeft: "16%"}, 400, "linear");
            $('footer').animate({marginLeft: "16%", width: "84%"}, 400, "linear");
            $(".centralContent").animate({marginLeft: "16%"}, 400, "linear");
            $("#main .imported").animate({left: "16%"}, 400, "linear");
            $('aside').removeClass('navMinify');
            $(".automationBreak").html('<h3 class="uppercase sectionBreak automationSection">Automation</h3>');
            $(".toolboxBreak").html('<h3 class="uppercase sectionBreak toolboxSection">Toolbox</h3>');
        // Else if the nav bar is expanded shrink it and do some formatting
        } else {
            $('aside').animate({width: "5%"}, 400, "linear");
            $('header').animate({width: "95%", marginLeft: "5%"}, 400, "linear");
            $('footer').animate({marginLeft: "5%", width: "95%"}, 400, "linear");
            $(".centralContent").animate({marginLeft: "5%"}, 400, "linear");
            $("#main .imported").animate({left: "5%"}, 400, "linear");
            $('aside').addClass('navMinify');
            $(".automationBreak").html('<i class="dotHolder far fa-ellipsis-h"></i>');
            $(".toolboxBreak").html('<i class="dotHolder far fa-ellipsis-h"></i>');
        }
    });
    // JS for expanding collapsing sidebar tool menus
    $(".basExpander").on("click", function(){
        $(".basTools").slideToggle();
        $(".basExpander > .expander").toggleClass("expanderDown");
        $(".basExpander").toggleClass("lit");
    });
    $(".genExpander").on("click", function(){
        $(".genTools").slideToggle();
        $(".genExpander > .expander").toggleClass("expanderDown");
        $(".genExpander").toggleClass("lit");
    });
    $(".alphaExpander").on("click", function(){
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
    $(".dashSelector").on("click", function(){
        $("#main").load("dashboard.html");
    });
    $(".tvTool").on("click", function(){
        $("#main").load("tvTool.html"); 
    });
    $(".freqTool").on("click", function(){
        $("#main").load("freqTool.html"); 
    });
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
    // JS for styling tool items when they are selected
    $(".subLink").on("click", function(){
        $(".subLink").removeClass("litLink");
        $(".rootLink").removeClass("litLink");
        $(this).addClass("litLink"); 
    });
    $(".rootLink").on("click", function(){
        $(".subLink").removeClass("litLink");
        $(".rootLink").removeClass("litLink");
        $(this).addClass("litLink"); 
    });
    // Random quote generator
    var colorWheel = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

    var quoteAuthor = "";
    var quoteText = "";

    function getQuote() {
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?", function(data) {
        quoteText = data.quoteText;

        if (data.quoteAuthor) {
        quoteAuthor = data.quoteAuthor;
        } else {
        quoteAuthor = "Anonymous"
        }

        $('.quoteBox').animate({
        opacity: 0
        }, 500, function() {
        $('.quoteBox').html(quoteText);
        $(this).animate({
            opacity: 1
        }, 500);
        });

        $('.quoteAuthor').animate({
        opacity: 0
        }, 500, function() {
        $('.quoteAuthor').html(" - " + quoteAuthor);
        $(this).animate({
            opacity: 1
        }, 500);
        });

        var choice = Math.floor(Math.random() * colorWheel.length);

        $('.quoteText').animate({
        backgroundColor: colorWheel[choice],
        color: colorWheel[choice],
        }, 1000);
    });
    }
    getQuote();
});