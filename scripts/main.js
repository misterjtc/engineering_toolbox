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
    // JS for collapsing/expanding the nav bar when the user clicks the button
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
            $(".automationBreak").html('<h3 class="uppercase sectionBreak automationSection">Automation</h3>');
            $(".toolboxBreak").html('<h3 class="uppercase sectionBreak toolboxSection">Toolbox</h3>');
        // Else if the nav bar is expanded shrink it and do some formatting
        } else {
            $('aside').animate({width: "5%"}, 400, "linear");
            $('header').animate({width: "95%", marginLeft: "5%"}, 400, "linear");
            $('footer').animate({marginLeft: "5%", width: "95%"}, 400, "linear");
            $(".centralContent").animate({marginLeft: "5%"}, 400, "linear");
            $('aside').addClass('navMinify');
            $('aside').addClass('navCheck');
            $(".automationBreak").html('<i class="dotHolder far fa-ellipsis-h"></i>');
            $(".toolboxBreak").html('<i class="dotHolder far fa-ellipsis-h"></i>');
        }
    });
    // JS for collapsing/expanding the nav panel when the users hovers over it if its collapsed
    $("aside").hover(function () {
        // stuff to do when the mouse enters the nav region
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
        //stuff to do when the mouse leaves the nav region
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
    $(".dashSelector, .logo").on("click", function(){
        $("#main").html('<div id="loader" class="loader"> <h1> Welcome to Kyle\'s Dashboard! </h1> <img src="./assets/symbol_litens_black.png" alt="This is the Litens logo"> </div>');
        $(".headToolSwitch").html('Dashboard');
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
});

