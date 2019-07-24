$(function(){
    // Check if the function is ready
    console.log("I'm Ready");
    // Set margin for main content switch based on height of header
    var $headerHeight = $('header').css('height');
    var $footerHeight = $("footer").height();
    $('.centralContent').css('margin-top', $headerHeight);
    $('.grid').css('margin-bottom', $footerHeight);
    // Show dashboard as selected on site load
    $(".dashSelector").addClass("litLink"); 
    // Trying the loader config
    function showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("dashboard").style.opacity = "1";
        $('#dashboard').fadeIn("slow");
    }
    setTimeout(showPage, 1500);
    
    // JS for collapsing/expanding the nav bar when the user clicks the button
    $(".minify").on("click", function(){
        // Close all tool lists and remove expansion formatting
        var $asideWidth = $('aside').width();
        // $(".basExpander > .expander").removeClass("expanderDown");
        // $(".basExpander").removeClass("lit");
        // $(".genExpander > .expander").removeClass("expanderDown");
        // $(".genExpander").removeClass("lit");
        // $(".alphaExpander > .expander").removeClass("expanderDown");
        // $(".alphaExpander").removeClass("lit");
        // $(".basTools").slideUp();
        // $(".genTools").slideUp();
        // $(".alphaTools").slideUp();
        console.log($asideWidth);
        // If the nav bar is less than 100px, expand it and do some formatting
        if ( $('aside').hasClass("navCheck") ) {
            $('aside').animate({width: "16%"}, 400, "linear");
            $('header').animate({width: "84%", marginLeft: "16%"}, 400, "linear");
            $('footer').animate({marginLeft: "16%", width: "84%"}, 400, "linear");
            $(".centralContent").animate({marginLeft: "16%"}, 400, "linear");
            // $("#main .imported").animate({left: "16%"}, 400, "linear");
            $('aside').removeClass('navMinify');
            $('aside').removeClass('navCheck');
            $(".automationBreak").html('<h3 class="uppercase sectionBreak automationSection">Automation</h3>');
            $(".toolboxBreak").html('<h3 class="uppercase sectionBreak toolboxSection">Toolbox</h3>');
        // Else if the nav bar is expanded shrink it and do some formatting
        } else {
            $('aside').animate({width: "5%"}, 400, "linear");
            $('header').animate({width: "95%", marginLeft: "5%"}, 400, "linear");
            $('footer').animate({marginLeft: "5%", width: "95%"}, 400, "linear");
            $(".centralContent").animate({marginLeft: "5%"}, 400, "linear");
            // $("#main .imported").animate({left: "5%"}, 400, "linear");
            $('aside').addClass('navMinify');
            $('aside').addClass('navCheck');
            $(".automationBreak").html('<i class="dotHolder far fa-ellipsis-h"></i>');
            $(".toolboxBreak").html('<i class="dotHolder far fa-ellipsis-h"></i>');
        }
    });
    // JS for collapsing/expanding the nav panel when the users hovers over it if its collapsed
    $("aside").hover(function () {
        // stuff to do when the mouse enters the element
        var $asideWidth = $('aside').width();
        if ( $asideWidth < 110 && $('aside').hasClass("navCheck") ) {
            $('aside').animate({width: "16%"}, 400, "linear");
            $('aside').removeClass('navMinify');
            $(".automationBreak").html('<h3 class="uppercase sectionBreak automationSection">Automation</h3>');
            $(".toolboxBreak").html('<h3 class="uppercase sectionBreak toolboxSection">Toolbox</h3>');
        } else {
            // just do nothing bro
        }
    }, 
    function () {
        //stuff to do when the mouse leaves the element
        if ( $('aside').hasClass("navCheck") ) {
            $('aside').animate({width: "5%"}, 400, "linear");
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
    // Dashboard loader
    $(".dashSelector").on("click", function(){
        console.log("dash button was clicked!");
        $("#main").html('<div id="dashboard" class="dashboard grid"><div class="contentItem1 dashBox item size1"><div class="item-content ronsQuotes"><div class="contentHeader"><h3> Ron\'s Inspirational Quotes</h3></div><div class="quoteMain"><div class="quotePic"> <img src="./assets/mark-adriane-muS2RraYRuQ-unsplash.jpg" alt="These are random inspiration images from unsplash"></div><div class="quoteText"><div class="quoteBox"></div><p class="quoteAuthor"></p></div></div></div></div><div class="contentItem2 dashBox item size1"><div class="item-content popularApps"><div class="contentHeader"><h3> Kyle\'s Favourite Apps</h3></div><div class="popularApps"> <a href="" class="popApp popApp1"> <i class="fas fa-wave-sine"></i><p> Torsional Vibration</p> </a> <a href="" class="popApp popApp2"> <i class="fas fa-cogs"></i><p> System Natural Freq.</p> </a> <a href="" class="popApp popApp3"> <i class="fas fa-wrench"></i><p> Frank\'s Bolted Joints</p> </a> <a href="" class="popApp popApp4"> <i class="fas fa-chart-line"></i><p> Frank\'s Stress-Strain</p> </a> <a href="" class="popApp popApp5"> <i class="far fa-scrubber"></i><p> Frank\'s Press-fits</p> </a></div></div></div><div class="contentItem3 dashBox autoFeed item size3"><div class="item-content"><div class="contentHeader"><h3> Peter\'s Automotive Feed</h3></div><div class="anotherApp"></div></div></div><div class="contentItem4 dashBox item size3"><div class="item-content"><div class="contentHeader"><h3> Another Important Tool 1</h3></div><div class="anotherApp"></div></div></div><div class="contentItem5 dashBox item size3"><div class="item-content"><div class="contentHeader"><h3> Another Important Tool 2</h3></div><div class="anotherApp"></div></div></div><div class="contentItem6 dashBox item size2"><div class="item-content"><div class="contentHeader"><h3> Another Important Tool 3</h3></div><div class="anotherApp"></div></div></div><div class="contentItem7 dashBox item size1"><div class="item-content"><div class="contentHeader"><h3> Another Important Tool 4</h3></div><div class="anotherApp"></div></div></div><div class="contentItem8 dashBox item size4"><div class="item-content"><div class="contentHeader"><h3> Another Important Tool 5</h3></div><div class="anotherApp"></div></div></div><div class="contentItem9 dashBox item size4"><div class="item-content"><div class="contentHeader"><h3> Another Important Tool 6</h3></div><div class="anotherApp"></div></div></div></div>');
        $(".headToolSwitch").html('Dashboard');
        $('.grid').css('margin-bottom', $footerHeight);
        // Reload the Muuri whenever we reload the dashboard
        var grid = new Muuri('.grid', {dragEnabled: true});
        // Reload the quote function whenever we reload the dashbaord
        getQuote();
    });
    // Automator loader
    $(".productAutomator").on("click", function(){
        $("#main").load("automator.html");
        $(".headToolSwitch").html('Patrick\'s Automator');
    });
    // Loading for various tools
    $(".tvTool").on("click", function(){
        $("#main").load("tvTool.html");
        $(".headToolSwitch").html('Torsional Vibration Calculator');
    });
    $(".freqTool").on("click", function(){
        $("#main").load("freqTool.html");
        $(".headToolSwitch").html('System Natural Freq. Calculator');
    });
    $(".basJointTool").on("click", function(){
        $("#main").load("jointTool.html"); 
        $(".headToolSwitch").html('Frank\'s Bolted Joint Calculator');
    });
    $(".stressGen").on("click", function(){
        $("#main").load("stressStrainTool.html");
        $(".headToolSwitch").html('Frank\'s Stress Strain Generator');
    });
    $(".pressTool").on("click", function(){
        $("#main").load("pressTool.html");
        $(".headToolSwitch").html('Cylindrical Press-fit Calculator');
    });
    $(".basSpringTool").on("click", function(){
        $("#main").load("wip.html");
        $(".headToolSwitch").html('Under Construction');
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
    // Loading pop-up content when footer links are clicked
    $(".aboutLink").on("click", function(){
        $( ".aboutPopup" ).fadeToggle( "slow", function() {
            // Animation complete
        });
    });
    $(".teamLink").on("click", function(){
        $( ".teamPopup" ).fadeToggle( "slow", function() {
            // Animation complete
        });
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
    // Muuri draggable dashboard content
    var grid = new Muuri('.grid', {dragEnabled: true});
    window.addEventListener('load', function () {
        grid.refreshItems().layout();
      });
    // Flickity config for Kathys Kool Pics
    $('.kathyHero').flickity({
        pageDots: true,
        draggable: false,
        contain: true,
        autoPlay: 4000,
        cellSelector: '.kathyCell',
        prevNextButtons: false,
        wrapAround: true,
    });
    // Time delay function for loading dashboard
    // var loaderTimer;
    // $(window).load(function() {
    //     console.log("the loader function ran");
    // });
});

