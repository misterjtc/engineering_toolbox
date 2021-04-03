// Document Ready Function
$(document).ready(function() {

})


$(function(){
    // Check if the function is ready
    console.log("I'm Ready");
    //********************************************************** */
    // Set margin for main content switch based on height of header
    //********************************************************** */
    var $headerHeight = $('header').css('height');
    var $footerHeight = $("footer").height();
    $('.centralContent').css('margin-top', $headerHeight);
    // Show dashboard as selected on site load
    $(".dashSelector").addClass("litLink");
    //********************************************************** */
    // Trying the loader config
    // ********************************************************* */
    // This code display an image shortly while the page loads and then displays the dashboard
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
            $(".engToolsSection").html('<h3 class="uppercase sectionBreak toolboxSection">Engineering Toolbox</h3>');
            $(".erpToolsSection").html('<h3 class="uppercase sectionBreak toolboxSection">erp toolbox</h3>');
        // Else if the nav bar is expanded shrink it and do some formatting
        } else {
            $('aside').animate({width: "5%"}, 400, "linear");
            $('header').animate({width: "95%", marginLeft: "5%"}, 400, "linear");
            $('footer').animate({marginLeft: "5%", width: "95%"}, 400, "linear");
            $(".centralContent").animate({marginLeft: "5%"}, 400, "linear");
            $('aside').addClass('navMinify');
            $('aside').addClass('navCheck');
            $(".toolboxBreak").html('<i class="fas fa-ellipsis-h"></i>');
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
            $(".engToolsSection").html('<h3 class="uppercase sectionBreak toolboxSection">Engineering Toolbox</h3>');
            $(".erpToolsSection").html('<h3 class="uppercase sectionBreak toolboxSection">erp toolbox</h3>');
        } else {
            // just do nothing bro
        }
    }, 
    function () {
        //stuff to do when the mouse leaves the nav region
        if ( $('aside').hasClass("navCheck") ) {
            $('aside').animate({width: "5%"}, 400, "linear");
            $('aside').addClass('navMinify');
            $(".toolboxBreak").html('<i class="fas fa-ellipsis-h"></i>');
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
    // Loading for various tools
    // ********************************************************** */
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
    // ********************************************************** */
    // JS for showing and hiding tools based on user input        */
    // ********************************************************** */
    $(".dashSelector, .logo").on("click", function(){
        $(".headToolSwitch").html('Dashboard');
        $( "#dashboard" ).fadeIn( "slow", function() {
            // Animation complete
        });
        $( "#tvToolApp, #stressToolApp, #boltToolApp, #pressToolApp, #arcToolApp, #stackupToolApp" ).fadeOut( "slow", function() {
            // Animation complete
        });
    });
    $("#tvTool").on("click", function(){
        $(".headToolSwitch").html('Torsional Vibration Calculator');
        $( "#dashboard, #stressToolApp , #boltToolApp, #pressToolApp, #arcToolApp , #stackupToolApp" ).fadeOut( "slow", function() {
            // Animation complete
        });
        $( "#tvToolApp" ).fadeIn( "slow", function() {
            // Animation complete
        });
    });
    $("#stressGen").on("click", function(){
        $(".headToolSwitch").html('Stress Strain Generator');
        $( "#dashboard, #tvToolApp, #boltToolApp, #pressToolApp, #arcToolApp, #stackupToolApp" ).fadeOut( "slow", function() {
            // Animation complete
        });
        $( "#stressToolApp" ).fadeIn( "slow", function() {
            // Animation complete
        });
    });
    $("#jointTool").on("click", function(){
        $(".headToolSwitch").html('Bolted Joint Calculator');
        $( "#dashboard, #tvToolApp, #stressToolApp, #pressToolApp, #arcToolApp #stackupToolApp, #arcToolApp" ).fadeOut( "slow", function() {
            // Animation complete
        });
        $( "#boltToolApp" ).fadeIn( "slow", function() {
            // Animation complete
        });
    });
    $("#arcTool").on("click", function(){
        $(".headToolSwitch").html('Arc Length Calculator');
        $( "#dashboard, #tvToolApp, #stressToolApp, #pressToolApp, #boltToolApp, #stackupToolApp, #boltToolApp" ).fadeOut( "slow", function() {
            // Animation complete
        });
        $( "#arcToolApp" ).fadeIn( "slow", function() {
            // Animation complete
        });
    });
    $("#pressTool").on("click", function(){
        $(".headToolSwitch").html('Press-Fit Calculator');
        $( "#dashboard, #tvToolApp, #stressToolApp, #jointToolApp, #arcToolApp, #stackupToolApp" ).fadeOut( "slow", function() {
            // Animation complete
        });
        $( "#pressToolApp" ).fadeIn( "slow", function() {
            // Animation complete
        });
    });
    $("#stackupTool").on("click", function(){
        $(".headToolSwitch").html('Stack-up Calculator');
        $( "#dashboard, #tvToolApp, #stressToolApp, #jointToolApp, #arcToolApp, #pressToolApp" ).fadeOut( "slow", function() {
            // Animation complete
        });
        $( "#stackupToolApp" ).fadeIn( "slow", function() {
            // Animation complete
        });
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

});
