// Main namespace objects
const engApp = {};
// Tools object for targetting tools and switching
engApp.engTools = {
    dashSelector: "dashboard",
    mainLogo: "dashboard",
    stressGen: "stressToolApp",
    pressTool: "pressToolApp",
    jointTool: "boltToolApp",
    arcTool: "arcToolApp",
    stackupTool: "stackupToolApp",
    springTool: "springToolApp",
    tvTool: "tvToolApp",
    freqTool: "freqToolApp"
}

// Function to make nav expand adjustments
engApp.navExpand = function() {
    $('aside').animate({width: "16%"}, 400, "linear");
    $('header').animate({width: "84%", marginLeft: "16%"}, 400, "linear");
    $('footer').animate({marginLeft: "16%", width: "84%"}, 400, "linear");
    $(".centralContent").animate({marginLeft: "16%"}, 400, "linear");
    $('aside').removeClass('navMinify');
    $('aside').removeClass('navCheck');
    $(".engToolsSection").html('<h3 class="uppercase sectionBreak toolboxSection">Engineering Toolbox</h3>');
    $(".erpToolsSection").html('<h3 class="uppercase sectionBreak toolboxSection">erp toolbox</h3>');
};

// Function to make nav collapse adjustments
engApp.navCollapse = function() {
    $('aside').animate({width: "5%"}, 400, "linear");
    $('header').animate({width: "95%", marginLeft: "5%"}, 400, "linear");
    $('footer').animate({marginLeft: "5%", width: "95%"}, 400, "linear");
    $(".centralContent").animate({marginLeft: "5%"}, 400, "linear");
    $('aside').addClass('navMinify');
    $('aside').addClass('navCheck');
    $(".toolboxBreak").html('<i class="fas fa-ellipsis-h"></i>');
};

// function for managing the minimizing and expanding of the aside nav
engApp.navMachine = function() {
    // Close all tool lists and remove expansion formatting
    const $asideWidth = $('aside').width();
    console.log($asideWidth);
    // If the nav bar is less than 100px, expand it and do some formatting
    if ( $('aside').hasClass("navCheck") ) {
        engApp.navExpand();
    // Else if the nav bar is expanded shrink it and do some formatting
    } else {
        engApp.navCollapse();
    }
};

// Function to display the current date on the dashboard
engApp.displayDate = function() {
    const date =  new Date();
    dateYear = date.getFullYear();
    dateMonth = date.getMonth() + 1;
    dateDay = date.getDate();
    document.getElementById("today").innerHTML = `${dateMonth} / ${dateDay} / ${dateYear}`;
}

// Function to get an inspiring quote of the day
engApp.getQuotes = function() {
    // Call the api to get the quote
    $.ajax({
        url: `https://quotes.rest/qod.json?category=inspire`,
        method: 'GET',
        dataType: 'json',
    }).then(function(quote) {
        const theQuote = quote.contents.quotes[0];
        engApp.printQuotes(theQuote);
    });
}

// Function for printing the quote info to the page
engApp.printQuotes = function(quote) {
    // animate printing the author
        $('.quoteAuthor').animate({
        opacity: 0
        }, 500, function() {
        $('.quoteAuthor').html(" - " + quote.author);
        $(this).animate({
            opacity: 1
        }, 500);
        }); 
    // animate printing the quote
        $('.quoteBox').animate({
        opacity: 0
        }, 500, function() {
        $('.quoteBox').html(quote.quote);
        $(this).animate({
            opacity: 1
        }, 500);
        });
}

// App init method
engApp.init = function() {
    // Load wip pages as applicable
    $('#stressToolApp').load('wip.html');
    $('#boltToolApp').load('wip.html');
    $('#arcToolApp').load('wip.html');
    $('#stackupToolApp').load('wip.html');
    $('#tvToolApp').load('wip.html');
    $('#springToolApp').load('wip.html');
    $('#freqToolApp').load('wip.html');


    // Display loader image on initial page load for 1500 ms
    function showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("dashboard").style.opacity = "1";
        $('#dashboard').fadeIn("slow");
    }
    setTimeout(showPage, 1500);

    // Display the current date on the dashboard
    engApp.displayDate();

    // Event listener to watch for user clicking nav adjustment
    $(".minify").on("click", function(){
        engApp.navMachine();
    });

    // This code expands and collapses the nav menu bar when the user hovers inside the region
    $("aside").hover(function () {
        // stuff to do when the mouse enters the nav region
        const $asideWidth = $(this).width();
        if ( $asideWidth < 110 && $(this).hasClass("navCheck") ) {
            $(this).animate({width: "16%"}, 400, "linear");
            $(this).removeClass('navMinify');
            $(".engToolsSection").html('<h3 class="uppercase sectionBreak toolboxSection">Engineering Toolbox</h3>');
            $(".erpToolsSection").html('<h3 class="uppercase sectionBreak toolboxSection">erp toolbox</h3>');
        }
    },
    function () {
        //stuff to do when the mouse leaves the nav region
        if ( $(this).hasClass("navCheck") ) {
            $(this).animate({width: "5%"}, 400, "linear");
            $(this).addClass('navMinify');
            $(".toolboxBreak").html('<i class="fas fa-ellipsis-h"></i>');
        }
    });
    // Event listener to expand the different nav menu items when the user clicks on them
    $(".menuExpand").on("click", function() {
        $(this).next().slideToggle();
        $(this).children(".expander").toggleClass("expanderDown");
        $(this).toggleClass("lit");
    });
    // Event listener to load the tool that the user selects from the nav
    $(".toolSelector").on("click", function(){
        // Get information on the tool the user clicked
        const theTool = this.id;
        const theToolID = `#${engApp.engTools[theTool]}`;
        // Remove any selection highlighting from the nav menu
        $(".subLink").removeClass("litLink");
        $(".rootLink").removeClass("litLink");
        // Hightlight the tool item the user clicked in the nav
        $(this).addClass("litLink"); 
        // Update the dashboard header with the tool that has been selected
        $(".headToolSwitch").html(this.text);
        // Hide anything that is in the content area
        $( ".engTool, .dashboard" ).hide();
        // Show the tool the user selected
        $(theToolID).fadeIn( "slow" );
    });
    // Show/hide the scroll button based on the users position on the page
    $(".dashScrollContainer").scroll(function(){
        // Hide after the user scrolls
        let position = $(this).scrollTop();
        if (position > 250) {
            // This is for the scroll to the top button
            $('.dashboardMainScroll').fadeOut();
        // Otherwise hide features
        } else {
            //  This is for the scroll to the top button
            $('.dashboardMainScroll').fadeIn();
        }
    });
    // Smooth scroll to position when the user clicks the button
    $('.dashboardMainScroll a').on('click', function() {
        // event.preventDefault();
        $.smoothScroll({
          scrollElement: $('.dashScrollContainer'),
          scrollTarget: '#dashCalendar',
          speed: 600
        });
    });
    // Call the getQuotes function to display a nice inspirational quote on the dashboard
    engApp.getQuotes();
};

// Document Ready Function
$(document).ready(function() {
    // Confirm that the DOM has loaded
    console.log("Dashboard Ready!");
    engApp.init();
});
