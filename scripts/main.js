$(function(){
    // Check if the function is ready
    console.log("I'm Ready");
    //********************************************************** */
    // Set margin for main content switch based on height of header
    //********************************************************** */
    var $headerHeight = $('header').css('height');
    var $footerHeight = $("footer").height();
    $('.centralContent').css('margin-top', $headerHeight);
    $('.grid').css('margin-bottom', $footerHeight);
    // Show dashboard as selected on site load
    $(".dashSelector").addClass("litLink");
    //********************************************************** */
    // Trying the loader config
    // ********************************************************* */
    // This code display an image shortly while the page loads and then displays the dashbaord
    function showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("dashboard").style.opacity = "1";
        $('#dashboard').fadeIn("slow");
    }
    setTimeout(showPage, 1500);
    // ********************************************************** */
    // JS for collapsing/expanding the nav bar when the user clicks the button
    // ********************************************************** */
    // This code is used to expand and collapse the side nav bar. It checks the size of the nav to determine whether it should be expanded or collapsed
    $(".minify").on("click", function(){
        // Close all tool lists and remove expansion formatting
        var $asideWidth = $('aside').width();
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
            $(".toolboxBreak").html('<h3 class="uppercase sectionBreak toolboxSection">Toolbox</h3>');
        // Else if the nav bar is expanded shrink it and do some formatting
        } else {
            $('aside').animate({width: "5%"}, 400, "linear");
            $('header').animate({width: "95%", marginLeft: "5%"}, 400, "linear");
            $('footer').animate({marginLeft: "5%", width: "95%"}, 400, "linear");
            $(".centralContent").animate({marginLeft: "5%"}, 400, "linear");
            $('aside').addClass('navMinify');
            $('aside').addClass('navCheck');
            $(".toolboxBreak").html('<i class="dotHolder far fa-ellipsis-h"></i>');
        }
    });
    // ********************************************************** */
    // JS for collapsing/expanding the nav panel when the users hovers over it if its collapsed
    // ********************************************************** */
    // This code expands and collapses the nav menu bar when the user hovers inside the region
    $("aside").hover(function () {
        // stuff to do when the mouse enters the nav region
        var $asideWidth = $('aside').width();
        if ( $asideWidth < 110 && $('aside').hasClass("navCheck") ) {
            $('aside').animate({width: "16%"}, 400, "linear");
            $('aside').removeClass('navMinify');
            $(".toolboxBreak").html('<h3 class="uppercase sectionBreak toolboxSection">Toolbox</h3>');
        } else {
            // just do nothing bro
        }
    }, 
    function () {
        //stuff to do when the mouse leaves the nav region
        if ( $('aside').hasClass("navCheck") ) {
            $('aside').animate({width: "5%"}, 400, "linear");
            $('aside').addClass('navMinify');
            $(".toolboxBreak").html('<i class="dotHolder far fa-ellipsis-h"></i>');
        }
    });
    // ********************************************************** */
    // JS for expanding collapsing sidebar tool menus
    // ********************************************************** */
    // This section of code is used to expand or collapse specific tool lists inside the nav bar when the user clicks them
    $(".mechExpander").on("click", function(){
        $(".mechTools").slideToggle();
        $(".mechExpander > .expander").toggleClass("expanderDown");
        $(".mechExpander").toggleClass("lit");
    });
    $(".vibExpander").on("click", function(){
        $(".vibTools").slideToggle();
        $(".vibExpander > .expander").toggleClass("expanderDown");
        $(".vibExpander").toggleClass("lit");
    });
    $(".erpEngExpander").on("click", function(){
        $(".erpEngTools").slideToggle();
        $(".erpEngExpander > .expander").toggleClass("expanderDown");
        $(".erpEngExpander").toggleClass("lit");
    });
    $(".erpPurExpander").on("click", function(){
        $(".erpPurTools").slideToggle();
        $(".erpPurExpander > .expander").toggleClass("expanderDown");
        $(".erpPurExpander").toggleClass("lit");
    });
    $(".erpDocExpander").on("click", function(){
        $(".erpDocTools").slideToggle();
        $(".erpDocExpander > .expander").toggleClass("expanderDown");
        $(".erpDocExpander").toggleClass("lit");
    });
    // ********************************************************** */
    // JS for displaying current date on dashboard
    // ********************************************************** */
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    document.getElementById("today").innerHTML = m + "/" + d + "/" + y;
    // ********************************************************** */
    // JS for loading specific content onto the dashboard based on user selection
    // ********************************************************** */
    // Dashboard loader
    // Run all of this code when the user clicks on the Dashboard menu selector or the side logo
    // This is my current inefficient and hacky way until I figure out something better.
    $(".dashSelector, .logo").on("click", function(){
        $("#main").html('<div id="loader" class="loader"> <img src="./assets/jcook_engineering_v2_single_vectorized.png" alt="This is the Litens logo"> </div><div id="dashboard" class="dashboard grid"> <div class="contentItem1 dashBox item size1"> <div class="item-content ronsQuotes"> <div class="contentHeader"> <h3> Inspirational Quotes </h3> </div><div class="quoteMain"> <div class="quotePic"> <img src="./assets/ronsvibes.jpg" alt="These are random inspiration images from unsplash"> </div><div class="quoteText"> <div class="quoteBox"> </div><p class="quoteAuthor"> </p></div></div></div></div><div class="contentItem2 dashBox item size1"> <div class="item-content popularApps"> <div class="contentHeader"> <h3> Engineering Apps </h3> </div><div class="popularApps"> <a href="" class="popApp popApp1" onclick="return false"> <i class="fas fa-wave-sine"></i> <p> Torsional Vibration </p></a> <a href="" class="popApp popApp2" onclick="return false"> <i class="fas fa-cogs"></i> <p> System Natural Freq. </p></a> <a href="" class="popApp popApp3" onclick="return false"> <i class="fas fa-wrench"></i> <p> Bolted Joints </p></a> <a href="" class="popApp popApp4" onclick="return false"> <i class="fas fa-chart-line"></i> <p> Stress-Strain Generator </p></a> <a href="" class="popApp popApp5" onclick="return false"> <i class="far fa-scrubber"></i> <p> Press-fits </p></a> </div></div></div><div class="contentItem3 dashBox autoFeed item size5"> <div class="item-content"> <div class="contentHeader"> <h3> Twitter Feed </h3> </div><div class="feedContent"> <a class="twitter-timeline" href="https://twitter.com/realDonaldTrump?ref_src=twsrc%5Etfw">Tweets by realDonaldTrump</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> </div></div></div><div class="contentItem4 dashBox item size1 katsPics"> <div class="item-content"> <div class="contentHeader"> <h3> Kool Pics </h3> </div><div class="koolHero"> <img src="./assets/test1.jpg" alt="" class="koolCell"> <img src="./assets/test2.jpg" alt="" class="koolCell"> <img src="./assets/test3.jpg" alt="" class="koolCell"> <img src="./assets/test4.jpg" alt="" class="koolCell"> <img src="/assets/test5.jpg" alt="" class="koolCell"> </div></div></div><div class="contentItem5 dashBox item size1 eventList"> <div class="item-content"> <div class="contentHeader"> <h3> Magnificent Events </h3> </div><div class="cooksCalendar"> <iframe src="https://outlook.office365.com/calendar/group/litens.onmicrosoft.com/team_global_pe_hybrid_systems/view/day" frameborder="0"></iframe> </div></div></div><div class="contentItem6 dashBox item size2"> <div class="item-content"> <div class="contentHeader"> <h3> Important Forms </h3> </div><div class="anotherApp"> </div></div></div><div class="contentItem7 dashBox item size1"> <div class="item-content"> <div class="contentHeader"> <h3> Another Important Tool 4 </h3> </div><div class="anotherApp"> </div></div></div><div class="contentItem8 dashBox item size4"> <div class="item-content"> <div class="contentHeader"> <h3> Another Important Tool 5 </h3> </div><div class="anotherApp"> </div></div></div><div class="contentItem9 dashBox item size4"> <div class="item-content"> <div class="contentHeader"> <h3> Another Important Tool 6 </h3> </div><div class="anotherApp"> </div></div></div></div>');
        $(".headToolSwitch").html('Dashboard');
        $('.grid').css('margin-bottom', $footerHeight);
        // Reload the Muuri whenever we reload the dashboard
        var grid = new Muuri('.grid', {dragEnabled: true});
        // Reload the quote function whenever we reload the dashbaord
        getQuote();
        // Reload the hero picture slider whenever we reload the dashboard
        $('.koolHero').flickity({
            pageDots: true,
            draggable: false,
            contain: true,
            autoPlay: 4000,
            cellSelector: '.koolCell',
            prevNextButtons: false,
            wrapAround: true,
        });
        // Show the loader image for a few seconds whenever we reload the dashboard to give the content time to load
        function showPage() {
            document.getElementById("loader").style.display = "none";
            document.getElementById("dashboard").style.opacity = "1";
            $('#dashboard').fadeIn("slow");
        }
        setTimeout(showPage, 1500);
    });
    // ********************************************************** */
    // Loading for various tools
    // ********************************************************** */
    $(".tvTool").on("click", function(){
        $("#main").load("tvTool.html");
        $(".headToolSwitch").html('Torsional Vibration Calculator');
    });
    $(".freqTool").on("click", function(){
        $("#main").load("freqTool.html");
        $(".headToolSwitch").html('System Natural Freq. Calculator');
    });
    $(".jointTool").on("click", function(){
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
    $(".springTool").on("click", function(){
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
    $(".agile").on("click", function(){
        $("#main").load("agile.html");
        $(".headToolSwitch").html('Agile');
    });
    // ********************************************************** */
    // Loading pop-up content when footer links are clicked
    // ********************************************************** */
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
    // ********************************************************** */
    // Random quote generator
    // ********************************************************** */
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
    // ********************************************************** */
    // Muuri draggable dashboard content
    // ********************************************************** */
    var grid = new Muuri('.grid', {dragEnabled: true});
    window.addEventListener('load', function () {
        grid.refreshItems().layout();
      });
    // ********************************************************** */
    // Flickity config for Kathys Kool Pics
    // ********************************************************** */
    $('.koolHero').flickity({
        pageDots: true,
        draggable: false,
        contain: true,
        autoPlay: 4000,
        cellSelector: '.koolCell',
        prevNextButtons: false,
        wrapAround: true,
    });
});

