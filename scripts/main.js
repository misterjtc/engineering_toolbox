$(function(){
    // Check if the function is ready
    console.log("I'm Ready");
    //********************************************************** */
    // Set margin for main content switch based on height of header
    //********************************************************** */
    var $headerHeight = $('header').css('height');
    var $footerHeight = $("footer").height();
    $('.centralContent').css('margin-top', $headerHeight);
    // $('.grid').css('margin-bottom', $footerHeight);
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
        $( "#tvToolApp, #stressToolApp, #boltToolApp, #pressToolApp" ).fadeOut( "slow", function() {
            // Animation complete
        });
    });
    $("#tvTool").on("click", function(){
        $(".headToolSwitch").html('Torsional Vibration Calculator');
        $( "#dashboard, #stressToolApp , #boltToolApp, #pressToolApp" ).fadeOut( "slow", function() {
            // Animation complete
        });
        $( "#tvToolApp" ).fadeIn( "slow", function() {
            // Animation complete
        });
    });
    $("#stressGen").on("click", function(){
        $(".headToolSwitch").html('Stress Strain Generator');
        $( "#dashboard, #tvToolApp, #boltToolApp, #pressToolApp" ).fadeOut( "slow", function() {
            // Animation complete
        });
        $( "#stressToolApp" ).fadeIn( "slow", function() {
            // Animation complete
        });
    });
    $("#jointTool").on("click", function(){
        $(".headToolSwitch").html('Bolted Joint Calculator');
        $( "#dashboard, #tvToolApp, #stressToolApp, #pressToolApp" ).fadeOut( "slow", function() {
            // Animation complete
        });
        $( "#boltToolApp" ).fadeIn( "slow", function() {
            // Animation complete
        });
    });
    $("#jointTool").on("click", function(){
        $(".headToolSwitch").html('Bolted Joint Calculator');
        $( "#dashboard, #tvToolApp, #stressToolApp, #pressToolApp" ).fadeOut( "slow", function() {
            // Animation complete
        });
        $( "#boltToolApp" ).fadeIn( "slow", function() {
            // Animation complete
        });
    });
    $("#pressTool").on("click", function(){
        $(".headToolSwitch").html('Press-Fit Calculator');
        $( "#dashboard, #tvToolApp, #stressToolApp, #jointToolApp" ).fadeOut( "slow", function() {
            // Animation complete
        });
        $( "#pressToolApp" ).fadeIn( "slow", function() {
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
    // Set data for inital graphs on load
    tvCyc = [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1];
    sinDisp = [6,4.85,1.85,-1.85,-4.85,-6,-4.85,-1.85,1.85,4.85];
    sinVel = [0,-10.31,-16.68,-16.68,-10.31,0,10.31,16.68,16.68,10.31];
    sinAcc = [-2937,-2376,-907,907,2376,2937,2376,907,-907,-2376];
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
                    backgroundColor: 'rgba(62,77,84,0.3)',
                    borderColor: 'rgba(15,34,65,0.3)',
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
    // populate graphs on page load
    tvToolDispChart(sinDisp, tvCyc);
    tvToolVelChart(sinVel, tvCyc);
    tvToolAccChart(sinAcc, tvCyc);
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
        console.log(sinDisp);
        console.log(sinVel);
        console.log(sinAcc);
    });
    // ********************************************************** */
    // StressTool graphs and calcualtions
    // ********************************************************** */
    var ssChart;
    function stressStrainChart(stressStrainData) {
        // var ssChart;
        var ctx = document.getElementById('stressStrainChart');
        ssChart = new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    backgroundColor: 'rgba(62,77,84,0.3)',
                    borderColor: 'rgba(15,34,65,0.3)',
                    borderWidth: '3',
                    label: 'True Stress-Strain',
                    data: stressStrainData,
                }]
            },
            options: {
                showLines: true,
                legend: {
                    display: false,
                    labels: {
                        fontColor: 'rgb(255,99,132)',
                        boxWidth: 60,
                        fontSize: 18,
                    }
                },
                title: {
                    display: true,
                    text: 'True Stress-Strain Curve',
                    fontSize: '18',
                },
                scales: {
                    xAxes: [{
                        type: 'linear',
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
    // Set default stress strain chart data and populate the chart
    var trueStress = [0,1280,1310,1331,1346,1358,1369,1378,1416,1445,1470,1492,1511,1530,1547,1563,1578];
    var trueStrain = [0.000,0.006,0.007,0.009,0.011,0.013,0.015,0.017,0.027,0.037,0.046,0.056,0.066,0.076,0.086,0.096,0.104];
    var stressJson = [];
    for (var i = 0; i < trueStress.length; i++) {
        stressJson.push({
            x: trueStrain[i],
            y: trueStress[i]
        });
    }
    // Initialize data chart and graph based on default values
    stressStrainChart(stressJson);
    var trueStressCat = [];
    var trueStrainCat = [];
    var trueStressDisplay = [];
    var trueStrainDisplay = [];
    for (i=0;i<trueStress.length;i++) {
        trueStressCat.push("<h4>" + trueStress[i] + "</h4>");
        trueStrainCat.push("<h4>" + trueStrain[i] + "</h4>");
    }
    trueStressDisplay = trueStressCat.join("");
    trueStrainDisplay = trueStrainCat.join("");
    document.getElementById('stressDataContainer').innerHTML= trueStressDisplay;
    document.getElementById('strainDataContainer').innerHTML= trueStrainDisplay;
    // Do calcs and update the graph based on user input
    $(".stressCalc").on("click", function(){
        // ssChart.destroy();
        document.getElementById("stressGraphSizer").innerHTML = '&nbsp;';
        document.getElementById("stressGraphSizer").innerHTML = '<canvas id="stressStrainChart"></canvas>';
        trueStress = [];
        trueStrain = [];
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
        trueStrain.push(lastTrueStrain);
        trueStress.push(lastTrueStress);
        console.log(trueStress);
        console.log(trueStrain);
        // for loop to reduce the number of decimal places in the 
        for (var x=0;x<17;x++) {
            trueStrain[x] = trueStrain[x].toFixed(3);
            trueStress[x] = trueStress[x].toFixed(0);
        }
        // for loop to fill the data array for sending to the chart
        for (var i = 0; i < trueStress.length; i++) {
            stressJson.push({
                x: trueStrain[i],
                y: trueStress[i]
            });
        }
        // Call the chart function
        stressStrainChart(stressJson);
    });
    // Show data when user clicks
    $(".stressShowDat").on("click", function(){
        console.log(trueStress);
        console.log(trueStrain);
        trueStressCat = [];
        trueStrainCat = [];
        trueStressDisplay = [];
        trueStrainDisplay = [];
        for (i=0;i<trueStress.length;i++) {
            trueStressCat.push("<h4>" + trueStress[i] + "</h4>");
            trueStrainCat.push("<h4>" + trueStrain[i] + "</h4>");
        }
        trueStressDisplay = trueStressCat.join("");
        trueStrainDisplay = trueStrainCat.join("");
        document.getElementById('stressDataContainer').innerHTML= trueStressDisplay;
        document.getElementById('strainDataContainer').innerHTML= trueStrainDisplay;
    });
    // ********************************************************** */
    // Bolted joint tool calculations
    // ********************************************************** */
    $(".boltCalc").on("click", function(){
        // Declare variables and grab user inputs
        var boltSize = parseFloat($('.boltSize').val());
        var threadPitch = parseFloat($('.threadPitch').val());
        var boltHeadDia = parseFloat($('.boltHead').val());
        var threadFriction = parseFloat($('.threadFriction').val());
        var bearingFriction = parseFloat($('.bearingFriction').val());
        var boltGrade = parseFloat($('.boltStrength').val());
        var boltYieldStrength = 1000;
        var boltHoleDia = 12.2;
        // Set the bolt yield strength based on user bolt grade selection
        if (boltGrade == 5.8) {
            boltYieldStrength = 240;
        } else if (boltGrade == 8.8) {
            boltYieldStrength = 660;
        } else if (boltGrade == 10.9) {
            boltYieldStrength = 940;
        } else if (boltGrade == 12.9) {
            boltYieldStrength = 1100;
        }
        // Define variables and do necessary joint calcs
        var pitchDiameter = boltSize - 0.649515*threadPitch;
        var extMinorDiameter = boltSize - 1.082532*threadPitch;
        var triangleHeight = 0.866025*threadPitch;
        var diameterThree = extMinorDiameter - triangleHeight / 6;
        var stressArea = Math.PI / 4 * Math.pow(((pitchDiameter+diameterThree)/2),2);
        var stressDiameter = Math.sqrt(4 * stressArea / Math.PI);
        var alphaPrime = Math.atan(Math.tan(30*Math.PI/180)*Math.cos(Math.atan(threadPitch / (Math.PI * boltSize))));
        var jointStressAdjustment = 1 / Math.sqrt(1 + 3 * Math.pow(2 / stressDiameter * (threadPitch / Math.PI + threadFriction * pitchDiameter * (1 / Math.cos(alphaPrime))),2));
        var settledClamp = boltYieldStrength * stressArea * jointStressAdjustment / 1000;
        var torqueYield = settledClamp*(threadPitch / (2 * Math.PI) + pitchDiameter * threadFriction / (2 * Math.cos(30 * Math.PI / 180)) + (boltSize + boltHeadDia) * bearingFriction / 4);
        var unsettledClamp = stressArea * boltYieldStrength / 1000;
        var boltHeadPressure = 1000 * unsettledClamp / (Math.pow(boltHeadDia, 2) - Math.pow(boltHoleDia, 2)) / Math.PI * 4;
        $('.boltUnsettledClampOut').text(unsettledClamp.toFixed(2));
        $('.boltSettledClampOut').text(settledClamp.toFixed(2));
        $('.boltSurfacePressureOut').text(boltHeadPressure.toFixed(2));
        $('.boltTorqueYieldOut').text(torqueYield.toFixed(2));
        // Define variables and do necessary torque transmission calcs
        var interfaceOD = parseFloat($('.interfaceOD').val());
        var interfaceID = parseFloat($('.interfaceID').val());
        var interfaceCOF = parseFloat($('.interfaceFriction').val());
        var jointClampLoad = parseFloat($('.jointClampLoad').val());
        var jointTorque = 2 * interfaceCOF * jointClampLoad * (Math.pow(interfaceOD, 3) - Math.pow(interfaceID, 3)) / (8 * 0.75 * (Math.pow(interfaceOD, 2) - Math.pow(interfaceID, 2)));
        $('.jointTorqueOut').text(jointTorque.toFixed(2));
    });
    $(".boltSpecs").on("click", function(e){
        e.preventDefault();
        $( ".boltSpecDataContainer" ).fadeIn(300, function() {
            $(this).focus();
        });
    });
    $(".boltSpecDataContainer").on('blur',function(){
        $(this).fadeOut(300);
    });
    // ********************************************************** */
    // Press Tool graphs and calcualtions
    // ********************************************************** */
    // Define global variables for the presstool
    var finalInterfaceDia;
    var finalInterfaceRad;
    var pressInnerMaxDef;
    var pressOuterMaxDef;
    var pressInterfacePressure;
    var maxOuterHoopStress;
    var maxInnerHoopStress;
    var pressAssemblyForce;
    var pressTorqueCapacity;
    // Define the main function for doing the press-fit calc
    function pressToolMainCalc(innerODRad, innerIDRad, outerIDRad, outerODRad, innerModulus, innerPoissons, outerModulus, outerPoissons, pressInterfaceLength, pressInterfaceFriction, pressTemp, pressCondition) {
        // Check if user inputs are actually an interference
        var pressDiff = innerODRad - outerIDRad;
        var startRadius = innerODRad * 10;
        var calcRadius = outerIDRad * 10;
        var allowedError = 0.000000000001;
        var pressCounter = 0;
        var x = pressCondition;
        // If the press-fit is a clearance then exit the function and let the user know of the issue
        if (pressDiff < 0) {
            // return "Clearance";
            alert("Your press-fit is a clearance. Please adjust the values and try again.");
        // else do the main press-fit calculations
        } else {
            while ((startRadius - calcRadius) > allowedError) {
                var mainTerm = (Math.pow(outerODRad, 2) + Math.pow(startRadius, 2)) / (Math.pow(outerODRad, 2) - Math.pow(startRadius, 2)) / outerModulus + outerPoissons / outerModulus + (Math.pow(startRadius, 2) + Math.pow(innerIDRad, 2)) / (Math.pow(startRadius, 2) - Math.pow(innerIDRad, 2)) / innerModulus - innerPoissons / innerModulus;
                var interfacePressure = pressDiff * 0.5 / startRadius / mainTerm / 1e6;
                var outerDelta = startRadius * interfacePressure / outerModulus * ((Math.pow(outerODRad, 2) + Math.pow(startRadius, 2)) / (Math.pow(outerODRad, 2) - Math.pow(startRadius, 2)) + outerPoissons) * 1e6;
                calcRadius = outerIDRad + outerDelta;
                startRadius = (calcRadius + startRadius) * 0.5;
                pressCounter = pressCounter + 1;
                if (pressCounter > 100) {
                    alert("The tool failed to do the calcs bro");
                    break;
                }
            }
            // console.log(finalInterfaceRad);
            if (pressCounter < 101) {
                finalInterfaceRad = startRadius * 1000;
                finalInterfaceDia = finalInterfaceRad *2;
                // Declare output variables and do necessary simple calcs
                // Outer component deflection
                pressOuterMaxDef = (finalInterfaceDia - (outerIDRad * 2 * 1000));
                // Inner component max deflection
                pressInnerMaxDef = ((innerODRad * 2 * 1000) - finalInterfaceDia);
                // Interface pressure
                pressInterfacePressure = (pressInnerMaxDef + pressOuterMaxDef) / 2 / finalInterfaceRad / mainTerm;
                // Hoop stress
                maxOuterHoopStress = Math.pow(finalInterfaceRad, 2) * pressInterfacePressure / (Math.pow(outerODRad*1000, 2) - Math.pow(finalInterfaceRad, 2)) * (1 + Math.pow(outerODRad*1000, 2) / Math.pow(finalInterfaceRad, 2));
                minOuterHoopStress = Math.pow(finalInterfaceRad, 2) * pressInterfacePressure / (Math.pow(outerODRad*1000, 2) - Math.pow(finalInterfaceRad, 2)) * 2;
                maxInnerHoopStress = pressInterfacePressure * 2 * Math.pow(finalInterfaceRad, 2) / (Math.pow(finalInterfaceRad, 2) - Math.pow(innerIDRad*1000, 2));
                minInnerHoopStress = Math.pow(finalInterfaceRad, 2) * pressInterfacePressure * (Math.pow(finalInterfaceRad, 2) + Math.pow(innerIDRad*1000, 2)) / (Math.pow(finalInterfaceRad, 2) - Math.pow(innerIDRad*1000, 2)) / Math.pow(finalInterfaceRad, 2);
                // Assembly force
                pressAssemblyForce = pressInterfacePressure * 1000 * 2 * Math.PI * finalInterfaceRad * pressInterfaceLength / 1000 * pressInterfaceFriction;
                // Torque capacity of press-fit joint
                pressTorqueCapacity = pressAssemblyForce * finalInterfaceRad / 1000;
                // Populate the detailed outputs table
                $(pressTemp + " .row:nth-child(3) h3:nth-child(" + x + ")").text((innerODRad * 2 * 1000).toFixed(3));
                $(pressTemp + " .row:nth-child(4) h3:nth-child(" + x + ")").text((innerIDRad * 2 * 1000).toFixed(3));
                $(pressTemp + " .row:nth-child(5) h3:nth-child(" + x + ")").text((outerIDRad * 2 *1000).toFixed(3));
                $(pressTemp + " .row:nth-child(6) h3:nth-child(" + x + ")").text((outerODRad *2 * 1000).toFixed(3));
                $(pressTemp + " .row:nth-child(7) h3:nth-child(" + x + ")").text(finalInterfaceRad.toFixed(3));
                $(pressTemp + " .row:nth-child(8) h3:nth-child(" + x + ")").text(finalInterfaceDia.toFixed(3));
                $(pressTemp + " .row:nth-child(9) h3:nth-child(" + x + ")").text(((innerODRad * 2 * 1000) - (outerIDRad * 2 * 1000)).toFixed(4));
                $(pressTemp + " .row:nth-child(10) h3:nth-child(" + x + ")").text(pressOuterMaxDef.toFixed(4));
                $(pressTemp + " .row:nth-child(11) h3:nth-child(" + x + ")").text(pressInnerMaxDef.toFixed(4));
                $(pressTemp + " .row:nth-child(12) h3:nth-child(" + x + ")").text(pressInterfacePressure.toFixed(1));
                $(pressTemp + " .row:nth-child(13) h3:nth-child(" + x + ")").text(maxOuterHoopStress.toFixed(1));
                $(pressTemp + " .row:nth-child(14) h3:nth-child(" + x + ")").text(minOuterHoopStress.toFixed(1));
                $(pressTemp + " .row:nth-child(15) h3:nth-child(" + x + ")").text(maxInnerHoopStress.toFixed(1));
                $(pressTemp + " .row:nth-child(16) h3:nth-child(" + x + ")").text(minInnerHoopStress.toFixed(1));
                $(pressTemp + " .row:nth-child(17) h3:nth-child(" + x + ")").text(pressAssemblyForce.toFixed(1));
                $(pressTemp + " .row:nth-child(18) h3:nth-child(" + x + ")").text(pressTorqueCapacity.toFixed(1));
            }
        }        
    };
    // Define graphing functions
    function pressToolForceChart(pressMinAssemblyForce,pressNomAssemblyForce,pressMaxAssemblyForce,pressTempLabels) {
        var ctx = document.getElementById('pressAssemblyForceChart');
        var pressAssemblyForceChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: pressTempLabels,
                datasets: [{
                    label: 'Min Stress',
                    borderColor: 'rgba(25,60,130,0.3)',
                    borderWidth: '3',
                    data: pressMinAssemblyForce,
                    fill: false,
                }, {
                    label: 'Nom Stress',
                    borderColor: 'rgba(42,203,52,0.3)',
                    borderWidth: '3',
                    data: pressNomAssemblyForce,
                    fill: false,
                }, {
                    label: 'Max Stress',
                    borderColor: 'rgba(15,34,65,0.3)',
                    borderWidth: '3',
                    data: pressMaxAssemblyForce,
                    fill: false,
                }]
            },
            options: {
                // responsive: true,
                // maintainAspectRatio: false,
                legend: {
                    display: false,
                    position: 'bottom',
                    labels: {
                        // fontColor: 'rgb(255,99,132)',
                        boxWidth: 50,
                        fontSize: 14,
                    }
                },
                title: {
                    display: true,
                    text: 'Assembly Force',
                    fontSize: '18',
                },
                scales: {
                    xAxes: [{
                        // type: 'linear',
                        position: 'bottom',
                        scaleLabel: {
                            display: 'true',
                            labelString: 'Temperature [°C]'
                        }
                    }],
                    yAxes: [{
                        scaleLabel: {
                            display: 'true',
                            labelString: 'Assembly Force [N]'
                        }
                    }],
                }
            }
        });
    }
    function pressToolTorqueChart(pressMinAssemblyTorque,pressNomAssemblyTorque,pressMaxAssemblyTorque,pressTempLabels) {
        var ctx = document.getElementById('pressAssemblyTorqueChart');
        var pressTorqueChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: pressTempLabels,
                datasets: [{
                    label: 'Min Stress',
                    borderColor: 'rgba(25,60,130,0.3)',
                    borderWidth: '3',
                    data: pressMinAssemblyTorque,
                    fill: false,
                }, {
                    label: 'Nom Stress',
                    borderColor: 'rgba(42,203,52,0.3)',
                    borderWidth: '3',
                    data: pressNomAssemblyTorque,
                    fill: false,
                }, {
                    label: 'Max Stress',
                    borderColor: 'rgba(15,34,65,0.3)',
                    borderWidth: '3',
                    data: pressMaxAssemblyTorque,
                    fill: false,
                }]
            },
            options: {
                // responsive: true,
                // maintainAspectRatio: false,
                legend: {
                    display: false,
                    position: 'bottom',
                    labels: {
                        // fontColor: 'rgb(255,99,132)',
                        boxWidth: 50,
                        fontSize: 14,
                    }
                },
                title: {
                    display: true,
                    text: 'Assembly Torque Capacity',
                    fontSize: '18',
                },
                scales: {
                    xAxes: [{
                        // type: 'linear',
                        position: 'bottom',
                        scaleLabel: {
                            display: 'true',
                            labelString: 'Temperature [°C]'
                        }
                    }],
                    yAxes: [{
                        scaleLabel: {
                            display: 'true',
                            labelString: 'Torque [N·m]'
                        }
                    }],
                }
            }
        });
    }
    $(".pressButton").on("click", function(){
        // Define variables for storing user inputs
        // Inner component inputs
        var innerInterfaceOD = parseFloat($('.innerInterfaceOD').val());
        var innerInterfaceODTolerance = parseFloat($('.innerInterfaceODTolerance').val());
        var innerInterfaceID = parseFloat($('.innerInterfaceID').val());
        var innerInterfaceIDTolerance = parseFloat($('.innerInterfaceIDTolerance').val());
        var innerModulus = parseFloat($('.innerModulus').val());
        var innerPoissons = parseFloat($('.innerPoissons').val());
        var innerThermExp = parseFloat($('.innerThermExp').val());
        // Outer component inputs
        var outerInterfaceID = parseFloat($('.outerInterfaceID').val());
        var outerInterfaceIDTolernace = parseFloat($('.outerInterfaceIDTolerance').val());
        var outerInterfaceOD = parseFloat($('.outerInterfaceOD').val());
        var outerInterfaceODTolerance = parseFloat($('.outerInterfaceODTolerance').val());
        var outerModulus = parseFloat($('.outerModulus').val());
        var outerPoissons = parseFloat($('.outerPoissons').val());
        var outerThermExp = parseFloat($('.outerThermExp').val());
        // Other inputs
        var pressMaxTemp = parseFloat($('.pressMaxTemp').val());
        var pressMinTemp = parseFloat($('.pressMinTemp').val());
        var pressRoomTemp = parseFloat($('.pressRoomTemp').val());
        var pressInterfaceFriction = parseFloat($('.pressInterfaceFriction').val());
        var pressInterfaceLength = parseFloat($('.pressInterfaceLength').val());
        // Define variables for calcs
        // Convert user Ø inputs into radii and mm to m
        var innerODRad = innerInterfaceOD / 2000;
        var innerIDRad = innerInterfaceID / 2000;
        var outerODRad = outerInterfaceOD / 2000;
        var outerIDRad = outerInterfaceID / 2000;
        // Define arrays for storing data for graphs
        var pressTempLabels = [pressMinTemp,pressRoomTemp,pressMaxTemp];
        var pressMinAssemblyForce = [];
        var pressNomAssemblyForce = [];
        var pressMaxAssemblyForce = [];
        var pressMinAssemblyTorque = [];
        var pressNomAssemblyTorque = [];
        var pressMaxAssemblyTorque = [];
        // Do the main press tool calcs 
        // Calcs for room temperature
        pressToolMainCalc(innerODRad, innerIDRad, outerIDRad, outerODRad, innerModulus, innerPoissons, outerModulus, outerPoissons, pressInterfaceLength, pressInterfaceFriction, ".pressTableRoom", 2);
        pressNomAssemblyForce[1] = pressAssemblyForce;
        pressNomAssemblyTorque[1] = pressTorqueCapacity;
        // Display outputs for the main table
        $('.pressFinalDiaOut').text(finalInterfaceDia.toFixed(3));
        $('.pressInnerMaxDefOut').text(pressInnerMaxDef.toFixed(3));
        $('.pressOuterMaxDefOut').text(pressOuterMaxDef.toFixed(3));
        $('.pressInnerMaxStressOut').text(maxInnerHoopStress.toFixed(1));
        $('.pressOuterMaxStressOut').text(maxOuterHoopStress.toFixed(1));
        $('.pressInterfacePressureOut').text(pressInterfacePressure.toFixed(1));
        $('.pressAssmForceOut').text(pressAssemblyForce.toFixed(1));
        $('.pressTorqCapOut').text(pressTorqueCapacity.toFixed(1));
        // Populate variables for min max calculations in the detailed outputs table
        var innerInterfaceODMax = innerInterfaceOD + (innerInterfaceODTolerance / 2);
        var innerInterfaceIDMax = innerInterfaceID + (innerInterfaceIDTolerance / 2);
        var innerInterfaceODMin = innerInterfaceOD - (innerInterfaceODTolerance / 2);
        var innerInterfaceIDMin = innerInterfaceID - (innerInterfaceIDTolerance / 2);
        var outerInterfaceIDMax = outerInterfaceID - (outerInterfaceIDTolernace / 2);
        var outerInterfaceODMax = outerInterfaceOD - (outerInterfaceODTolerance / 2);
        var outerInterfaceIDMin = outerInterfaceID + (outerInterfaceIDTolernace / 2);
        var outerInterfaceODMin = outerInterfaceOD + (outerInterfaceODTolerance / 2);
        var innerODRadMax = innerInterfaceODMax / 2000;
        var innerIDRadMax = innerInterfaceIDMax / 2000;
        var innerODRadMin = innerInterfaceODMin / 2000;
        var innerIDRadMin = innerInterfaceIDMin / 2000;
        var outerIDRadMax = outerInterfaceIDMax / 2000;
        var outerODRadMax = outerInterfaceODMax / 2000;
        var outerIDRadMin = outerInterfaceIDMin / 2000;
        var outerODRadMin = outerInterfaceODMin / 2000;
        pressToolMainCalc(innerODRadMin, innerIDRadMin, outerIDRadMin, outerODRadMin, innerModulus, innerPoissons, outerModulus, outerPoissons, pressInterfaceLength, pressInterfaceFriction, ".pressTableRoom", 1);
        pressMinAssemblyForce[1] = pressAssemblyForce;
        pressMinAssemblyTorque[1] = pressTorqueCapacity;
        pressToolMainCalc(innerODRadMax, innerIDRadMax, outerIDRadMax, outerODRadMax, innerModulus, innerPoissons, outerModulus, outerPoissons, pressInterfaceLength, pressInterfaceFriction, ".pressTableRoom", 3);
        pressMaxAssemblyForce[1] = pressAssemblyForce;
        pressMaxAssemblyTorque[1] = pressTorqueCapacity;
        // Calcs for min temperature
        var innerODRadColdMin = (innerInterfaceODMin * (1 + innerThermExp * (pressMinTemp - pressRoomTemp)) / 2000);
        var innerODRadCold = (innerInterfaceOD * (1 + innerThermExp * (pressMinTemp - pressRoomTemp)) / 2000);
        var innerODRadColdMax = (innerInterfaceODMax * (1 + innerThermExp * (pressMinTemp - pressRoomTemp)) / 2000);
        var innerIDRadColdMin = (innerInterfaceIDMin * (1 + innerThermExp * (pressMinTemp - pressRoomTemp)) / 2000);
        var innerIDRadCold = (innerInterfaceID * (1 + innerThermExp * (pressMinTemp - pressRoomTemp)) / 2000);
        var innerIDRadColdMax = (innerInterfaceIDMax * (1 + innerThermExp * (pressMinTemp - pressRoomTemp)) / 2000);
        var outerIDRadColdMin = (outerInterfaceIDMin * (1 + outerThermExp * (pressMinTemp - pressRoomTemp)) / 2000);
        var outerIDRadCold = (outerInterfaceID * (1 + outerThermExp * (pressMinTemp - pressRoomTemp)) / 2000);
        var outerIDRadColdMax = (outerInterfaceIDMax * (1 + outerThermExp * (pressMinTemp - pressRoomTemp)) / 2000);
        var outerODRadColdMin = (outerInterfaceODMin * (1 + outerThermExp * (pressMinTemp - pressRoomTemp)) / 2000);
        var outerODRadCold = (outerInterfaceOD * (1 + outerThermExp * (pressMinTemp - pressRoomTemp)) / 2000);
        var outerODRadColdMax = (outerInterfaceODMax * (1 + outerThermExp * (pressMinTemp - pressRoomTemp)) / 2000);
        pressToolMainCalc(innerODRadColdMax, innerIDRadColdMax, outerIDRadColdMax, outerODRadColdMax, innerModulus, innerPoissons, outerModulus, outerPoissons, pressInterfaceLength, pressInterfaceFriction, ".pressTableCold", 3);
        pressMaxAssemblyForce[0] = pressAssemblyForce;
        pressMaxAssemblyTorque[0] = pressTorqueCapacity;
        pressToolMainCalc(innerODRadCold, innerIDRadCold, outerIDRadCold, outerODRadCold, innerModulus, innerPoissons, outerModulus, outerPoissons, pressInterfaceLength, pressInterfaceFriction, ".pressTableCold", 2);
        pressNomAssemblyForce[0] = pressAssemblyForce;
        pressNomAssemblyTorque[0] = pressTorqueCapacity;
        pressToolMainCalc(innerODRadColdMin, innerIDRadColdMin, outerIDRadColdMin, outerODRadColdMin, innerModulus, innerPoissons, outerModulus, outerPoissons, pressInterfaceLength, pressInterfaceFriction, ".pressTableCold", 1);
        pressMinAssemblyForce[0] = pressAssemblyForce;
        pressMinAssemblyTorque[0] = pressTorqueCapacity;
        // Calcs for max temperature
        var innerODRadHotMin = (innerInterfaceODMin * (1 + innerThermExp * (pressMaxTemp - pressRoomTemp)) / 2000);
        var innerODRadHot = (innerInterfaceOD * (1 + innerThermExp * (pressMaxTemp - pressRoomTemp)) / 2000);
        var innerODRadHotMax = (innerInterfaceODMax * (1 + innerThermExp * (pressMaxTemp - pressRoomTemp)) / 2000);
        var innerIDRadHotMin = (innerInterfaceIDMin * (1 + innerThermExp * (pressMaxTemp - pressRoomTemp)) / 2000);
        var innerIDRadHot = (innerInterfaceID * (1 + innerThermExp * (pressMaxTemp - pressRoomTemp)) / 2000);
        var innerIDRadHotMax = (innerInterfaceIDMax * (1 + innerThermExp * (pressMaxTemp - pressRoomTemp)) / 2000);
        var outerIDRadHotMin = (outerInterfaceIDMin * (1 + outerThermExp * (pressMaxTemp - pressRoomTemp)) / 2000);
        var outerIDRadHot = (outerInterfaceID * (1 + outerThermExp * (pressMaxTemp - pressRoomTemp)) / 2000);
        var outerIDRadHotMax = (outerInterfaceIDMax * (1 + outerThermExp * (pressMaxTemp - pressRoomTemp)) / 2000);
        var outerODRadHotMin = (outerInterfaceODMin * (1 + outerThermExp * (pressMaxTemp - pressRoomTemp)) / 2000);
        var outerODRadHot = (outerInterfaceOD * (1 + outerThermExp * (pressMaxTemp - pressRoomTemp)) / 2000);
        var outerODRadHotMax = (outerInterfaceODMax * (1 + outerThermExp * (pressMaxTemp - pressRoomTemp)) / 2000);
        pressToolMainCalc(innerODRadHotMax, innerIDRadHotMax, outerIDRadHotMax, outerODRadHotMax, innerModulus, innerPoissons, outerModulus, outerPoissons, pressInterfaceLength, pressInterfaceFriction, ".pressTableHot", 3);
        pressMaxAssemblyForce[2] = pressAssemblyForce;
        pressMaxAssemblyTorque[2] = pressTorqueCapacity;
        pressToolMainCalc(innerODRadHot, innerIDRadHot, outerIDRadHot, outerODRadHot, innerModulus, innerPoissons, outerModulus, outerPoissons, pressInterfaceLength,pressInterfaceFriction, ".pressTableHot", 2);
        pressNomAssemblyForce[2] = pressAssemblyForce;
        pressNomAssemblyTorque[2] = pressTorqueCapacity;
        pressToolMainCalc(innerODRadHotMin, innerIDRadHotMin, outerIDRadHotMin, outerODRadHotMin, innerModulus, innerPoissons, outerModulus, outerPoissons, pressInterfaceLength, pressInterfaceFriction, ".pressTableHot", 1);
        pressMinAssemblyForce[2] = pressAssemblyForce;
        pressMinAssemblyTorque[2] = pressTorqueCapacity;
        // graph the data
        pressToolForceChart(pressMinAssemblyForce, pressNomAssemblyForce, pressMaxAssemblyForce, pressTempLabels);
        pressToolTorqueChart(pressMinAssemblyTorque,pressNomAssemblyTorque,pressMaxAssemblyTorque,pressTempLabels)
    // ********************************************************** */
    // Smooth Scroll
    // ********************************************************** */
    // Initial smoothscrolling for the required containers
    $(".pressInputsContainer").scroll(function(){
        // Show after the user scrolls 800px
        var y = $(this).scrollTop();
        if (y > 125) {
            // This is for the scroll to the top button
            $('.pressInputScroll').fadeOut();
            // This is for the secondary header
            // $('.headerAfter').fadeIn();
        // Otherwise hide featyres
        } else {
            //  This is for the scroll to the top button
            $('.pressInputScroll').fadeIn();
            // This is for the secondary header
            // $('.headerAfter').fadeOut();
        }
    });
    $(".pressAppScrollContainer").scroll(function(){
        // Show after the user scrolls 800px
        var y = $(this).scrollTop();
        if (y > 550) {
            // This is for the scroll to the top button
            $('.pressMainScroll').fadeOut();
            // This is for the secondary header
            // $('.headerAfter').fadeIn();
        // Otherwise hide featyres
        } else {
            //  This is for the scroll to the top button
            $('.pressMainScroll').fadeIn();
            // This is for the secondary header
            // $('.headerAfter').fadeOut();
        }
    });
    $('.pressInputScroll a').on('click', function() {
        // event.preventDefault();
        $.smoothScroll({
          scrollElement: $('.pressInputsContainer'),
          scrollTarget: '#pressInputsBottom',
          speed: 800
        });
    });
    $('.pressMainScroll a').on('click', function() {
        // event.preventDefault();
        $.smoothScroll({
          scrollElement: $('.pressAppScrollContainer'),
          scrollTarget: '.pressToolDetailedOutput',
          speed: 600
        });
    });
    });
});
