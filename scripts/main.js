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
    // function showPage() {
    //     document.getElementById("loader").style.display = "none";
    //     document.getElementById("dashboard").style.opacity = "1";
    //     $('#dashboard').fadeIn("slow");
    // }
    // setTimeout(showPage, 1500);
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
    // This is now the better way!! :D
    $(".dashSelector, .logo").on("click", function(){
        $( "#dashboard" ).fadeIn( "slow", function() {
            // Animation complete
            console.log("dash fade in ran")
        });
        $( "#tvToolApp" ).fadeOut( "slow", function() {
            // Animation complete
            console.log("tvtool fade out ran")
        });
    });
    // $(".dashSelector, .logo").on("click", function(){
    //     $("#main").html('<div id="loader" class="loader"> <img src="./assets/jcook_engineering_v2_single_vectorized.png" alt="This is the Litens logo"> </div><div id="dashboard" class="dashboard grid"> <div class="contentItem1 dashBox item size1"> <div class="item-content ronsQuotes"> <div class="contentHeader"> <h3> Inspirational Quotes </h3> </div><div class="quoteMain"> <div class="quotePic"> <img src="./assets/ronsvibes.jpg" alt="These are random inspiration images from unsplash"> </div><div class="quoteText"> <div class="quoteBox"> </div><p class="quoteAuthor"> </p></div></div></div></div><div class="contentItem2 dashBox item size1"> <div class="item-content popularApps"> <div class="contentHeader"> <h3> Engineering Apps </h3> </div><div class="popularApps"> <a href="" class="popApp popApp1" onclick="return false"> <i class="fas fa-wave-sine"></i> <p> Torsional Vibration </p></a> <a href="" class="popApp popApp2" onclick="return false"> <i class="fas fa-cogs"></i> <p> System Natural Freq. </p></a> <a href="" class="popApp popApp3" onclick="return false"> <i class="fas fa-wrench"></i> <p> Bolted Joints </p></a> <a href="" class="popApp popApp4" onclick="return false"> <i class="fas fa-chart-line"></i> <p> Stress-Strain Generator </p></a> <a href="" class="popApp popApp5" onclick="return false"> <i class="far fa-scrubber"></i> <p> Press-fits </p></a> </div></div></div><div class="contentItem3 dashBox autoFeed item size5"> <div class="item-content"> <div class="contentHeader"> <h3> Twitter Feed </h3> </div><div class="feedContent"> <a class="twitter-timeline" href="https://twitter.com/realDonaldTrump?ref_src=twsrc%5Etfw">Tweets by realDonaldTrump</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> </div></div></div><div class="contentItem4 dashBox item size1 katsPics"> <div class="item-content"> <div class="contentHeader"> <h3> Kool Pics </h3> </div><div class="koolHero"> <img src="./assets/test1.jpg" alt="" class="koolCell"> <img src="./assets/test2.jpg" alt="" class="koolCell"> <img src="./assets/test3.jpg" alt="" class="koolCell"> <img src="./assets/test4.jpg" alt="" class="koolCell"> <img src="/assets/test5.jpg" alt="" class="koolCell"> </div></div></div><div class="contentItem5 dashBox item size1 eventList"> <div class="item-content"> <div class="contentHeader"> <h3> Magnificent Events </h3> </div><div class="cooksCalendar"> <iframe src="https://outlook.office365.com/calendar/group/litens.onmicrosoft.com/team_global_pe_hybrid_systems/view/day" frameborder="0"></iframe> </div></div></div><div class="contentItem6 dashBox item size2"> <div class="item-content"> <div class="contentHeader"> <h3> Important Forms </h3> </div><div class="anotherApp"> </div></div></div><div class="contentItem7 dashBox item size1"> <div class="item-content"> <div class="contentHeader"> <h3> Another Important Tool 4 </h3> </div><div class="anotherApp"> </div></div></div><div class="contentItem8 dashBox item size4"> <div class="item-content"> <div class="contentHeader"> <h3> Another Important Tool 5 </h3> </div><div class="anotherApp"> </div></div></div><div class="contentItem9 dashBox item size4"> <div class="item-content"> <div class="contentHeader"> <h3> Another Important Tool 6 </h3> </div><div class="anotherApp"> </div></div></div></div>');
    //     $(".headToolSwitch").html('Dashboard');
    //     $('.grid').css('margin-bottom', $footerHeight);
    //     // Reload the Muuri whenever we reload the dashboard
    //     var grid = new Muuri('.grid', {dragEnabled: true});
    //     // Reload the quote function whenever we reload the dashbaord
    //     getQuote();
    //     // Reload the hero picture slider whenever we reload the dashboard
    //     $('.koolHero').flickity({
    //         pageDots: true,
    //         draggable: false,
    //         contain: true,
    //         autoPlay: 4000,
    //         cellSelector: '.koolCell',
    //         prevNextButtons: false,
    //         wrapAround: true,
    //     });
    //     // Show the loader image for a few seconds whenever we reload the dashboard to give the content time to load
    //     function showPage() {
    //         document.getElementById("loader").style.display = "none";
    //         document.getElementById("dashboard").style.opacity = "1";
    //         $('#dashboard').fadeIn("slow");
    //     }
    //     setTimeout(showPage, 1500);
    // });
    // ********************************************************** */
    // Loading for various tools
    // ********************************************************** */
    // $(".tvTool").on("click", function(){
    //     $("#main").load("tvTool.html");
    //     $(".headToolSwitch").html('Torsional Vibration Calculator');
    // });
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
    $(".purReq").on("click", function(){
        $("#main").load("purReq.html");
        $(".headToolSwitch").html('Purchase Requisitions');
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
    // THIS IS A TEST
    // THIS TEST WORKED I SHOULD USE THIS METHOD MOVING FORWARD
    $("#tvTool").on("click", function(){
        $( "#dashboard" ).fadeOut( "slow", function() {
            // Animation complete
            console.log("dash fade out ran")
        });
        $( "#tvToolApp" ).fadeIn( "slow", function() {
            // Animation complete
            console.log("tvtool fade in ran")
        });
        // document.getElementById("dashboard").style.display = "none";
        // document.getElementById("majorTest").style.display = "block";
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
    // ********************************************************** */
    // TVTool graphcs and calcualtions
    // ********************************************************** */
    tvLabels = [0,90.180,270,360];
    tvData = [1,0,1,0,1];
    Chart.defaults.global.defaultFontSize = '16';
    Chart.defaults.global.defaultFontColor = '#999999';
    Chart.defaults.global.defaultFontFamily = "'Raleway','Helvetica','sans-serif'";
    // Initialize chart.js for graphing
    function tvToolDispChart(tvDispData,tvDispLabels) {
        var ctx = document.getElementById('tvDispChart');
        var tvDispChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: tvDispLabels,
                datasets: [{
                    backgroundColor: 'rgba(65,135,165,0.3)',
                    borderColor: 'rgba(25,60,130,0.3)',
                    borderWidth: '3',
                    data: tvDispData,
                }]
            },
            options: {
                // responsive: true,
                // maintainAspectRatio: false,
                legend: {
                    display: false,
                    labels: {
                        // fontColor: 'rgb(255,99,132)',
                        boxWidth: 60,
                        fontSize: 18,
                    }
                },
                title: {
                    display: true,
                    text: 'TV Disp Amplitude',
                    fontSize: '18',
                },
                scales: {
                    xAxes: [{
                        // type: 'linear',
                        position: 'bottom',
                        scaleLabel: {
                            display: 'true',
                            labelString: 'Cycles'
                        }
                    }],
                    yAxes: [{
                        scaleLabel: {
                            display: 'true',
                            labelString: 'Amplitude [°]'
                        }
                    }],
                }
            }
        });
    }
    function tvToolVelChart(tvVelData,tvVelLabels) {
        var ctx = document.getElementById('tvVelChart');
        var tvVelChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: tvVelLabels,
                datasets: [{
                    backgroundColor: 'rgba(30,105,50,0.3)',
                    borderColor: 'rgba(42,203,52,0.3)',
                    borderWidth: '3',
                    data: tvVelData,
                }]
            },
            options: {
                legend: {
                    display: false,
                    labels: {
                        // fontColor: 'rgb(255,99,132)',
                        boxWidth: 60,
                        fontSize: 18,
                    }
                },
                title: {
                    display: true,
                    text: 'TV Velocity Amplitude',
                    fontSize: '18',
                },
                scales: {
                    xAxes: [{
                        // type: 'linear',
                        position: 'bottom',
                        scaleLabel: {
                            display: 'true',
                            labelString: 'Cycles'
                        }
                    }],
                    yAxes: [{
                        scaleLabel: {
                            display: 'true',
                            labelString: 'Velocity [rad/s]'
                        }
                    }],
                }
            }
        });
    }
    function tvToolAccChart(tvAccData,tvAccLabels) {
        var ctx = document.getElementById('tvAccChart');
        var tvAccChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: tvAccLabels,
                datasets: [{
                    backgroundColor: 'rgba(30,105,50,0.3)',
                    borderColor: 'rgba(42,203,52,0.3)',
                    borderWidth: '3',
                    data: tvAccData,
                }]
            },
            options: {
                legend: {
                    display: false,
                    labels: {
                        // fontColor: 'rgb(255,99,132)',
                        boxWidth: 60,
                        fontSize: 18,
                    }
                },
                title: {
                    display: true,
                    text: 'TV Acceleration Amplitude',
                    fontSize: '18',
                },
                scales: {
                    xAxes: [{
                        // type: 'linear',
                        position: 'bottom',
                        scaleLabel: {
                            display: 'true',
                            labelString: 'Cycles'
                        }
                    }],
                    yAxes: [{
                        scaleLabel: {
                            display: 'true',
                            labelString: 'Acceleration [rad/s²]'
                        }
                    }],
                }
            }
        });
    }
    // tvTool Calculations
    $(".tvCalc").on("click", function(){
        var numCyls = $('.numCyls').val();
        var rpm = $('.inRPM').val();
        var tvAmpRad = ((($('.tvAmp').val())/2)*(Math.PI/180));
        var tvAmp = (($('.tvAmp').val())/2);
        var fFreq = 0.00833 * rpm * numCyls;
        var period = 1 / fFreq;
        var timeX = [];
        var tvCyc = [1/10,2/10,3/10,4/10,5/10,6/10,7/10,8/10,9/10,1];
        var sinDisp = [];
        var sinVel = [];
        var sinAcc = [];
        var maxVel = tvAmpRad * 2 * Math.PI * fFreq;
        var maxAcc = tvAmpRad * ((2*Math.PI*fFreq)*(2*Math.PI*fFreq));
        $('.tvMaxVelOut').text(maxVel.toFixed(2));
        $('.tvMaxAccOut').text(maxAcc.toFixed(2));
        for (var j=0;j<10;j++)
        {
            timeX[j] = period * j * 0.1;
        }
        for (var i=0;i<timeX.length;i++)
        {
            sinDisp[i] = tvAmp*Math.cos(2*Math.PI*fFreq*timeX[i]);
            sinVel[i] = -tvAmpRad*2*Math.PI*fFreq*Math.sin(2*Math.PI*fFreq*timeX[i]);
            sinAcc[i] = -tvAmpRad*((2*Math.PI*fFreq)*(2*Math.PI*fFreq))*Math.cos(2*Math.PI*fFreq*timeX[i]);
        }
        tvToolDispChart(sinDisp, tvCyc);
        tvToolVelChart(sinVel, tvCyc);
        tvToolAccChart(sinAcc, tvCyc);
    });
    // ********************************************************** */
    // StressTool graphcs and calcualtions
    // ********************************************************** */
    function stressStrainChart(stressData,strainLabels) {
        var ctx = document.getElementById('stressStrainChart');
        var tvVelChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: strainLabels,
                datasets: [{
                    backgroundColor: 'rgba(30,105,50,0.3)',
                    borderColor: 'rgba(42,203,52,0.3)',
                    borderWidth: '3',
                    lineTension: 0.1,
                    data: stressData,
                }]
            },
            options: {
                legend: {
                    display: false,
                    labels: {
                        // fontColor: 'rgb(255,99,132)',
                        boxWidth: 60,
                        fontSize: 18,
                    }
                },
                title: {
                    display: true,
                    text: 'Stress-Strain Curve',
                    fontSize: '18',
                },
                scales: {
                    xAxes: [{
                        // type: 'linear',
                        position: 'bottom',
                        scaleLabel: {
                            display: 'true',
                            labelString: 'True Strain [ε]'
                        }
                    }],
                    yAxes: [{
                        scaleLabel: {
                            display: 'true',
                            labelString: 'True Stress [σ]'
                        }
                    }],
                }
            }
        });
    }
    var trueStress = [];
    var trueStrain = [];
    $(".stressCalc").on("click", function(){
        var youngsModulus = parseFloat($('.stressModulus').val());
        var engYield = parseFloat($('.stressYield').val());
        var engUltimate = parseFloat($('.stressUltimate').val());
        var engStrain = parseFloat($('.stressStrain').val());
        var firstTrueStrain = engYield / youngsModulus;
        var lastTrueStrain = Math.log(1 + engStrain);
        var lastTrueStress = engUltimate * (1+engStrain);
        var stressStrainOffset = parseFloat($('.stressOffset').val());
        var plasticPower = parseFloat($('.stressPower').val());
        trueStrain[0] = 0;
        trueStrain[1] = firstTrueStrain;
        trueStress[0] = 0; 
        trueStress[1] = engYield;
        // for loops to fill the strain array
        for (var m=2;m<3;m++) {
            trueStrain.push((lastTrueStrain - firstTrueStrain)/100 + trueStrain[m-1]);
        }
        for (var n=3;n<8;n++) {
            trueStrain.push((lastTrueStrain - firstTrueStrain)/50 + trueStrain[n-1]);
        }
        for (var p=8;p<16;p++) {
            trueStrain.push((lastTrueStrain - firstTrueStrain)/10 + trueStrain[p-1]);
        }
        // for loop to fill the stress array
        for (var j=2;j<16;j++)
        {
            trueStress.push((lastTrueStress - engYield + stressStrainOffset)/Math.pow(lastTrueStrain - firstTrueStrain,plasticPower)*Math.pow(trueStrain[j] - firstTrueStrain,plasticPower) + engYield - stressStrainOffset);
        }

        trueStrain.push(lastTrueStrain)
        trueStress.push(lastTrueStress);
        // for loop to reduce the number of decimal places in the 
        for (var x=0;x<17;x++) {
            trueStrain[x] = trueStrain[x].toFixed(3);
        }
        stressStrainChart(trueStress, trueStrain);
    });
    $(".stressShowDat").on("click", function(){
        $('.stressDataContainer').text(trueStress);
        $('.strainDataContainer').text(trueStress);
    });
});

