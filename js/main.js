function setup(){
    console.log("Starting");
    mobile = detectMob();
    console.log(mobile);
    // var mobile_url = "m/";
    if(mobile)

        window.location.replace("m.html");
        // document.getElementById("box").classList.remove('container');
    
        

}

function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

setup();

$(document).ready(function () {
    var leftMargin = 0;
    var width = $(document).width();
    var windowWidth = $(window).width();
    $('.left-arrow').click(function () {
        $('.scrollable').animate({
            marginLeft: "+=" + windowWidth 
        }, "medium");

        $('.right-arrow').show();
        leftMargin = (leftMargin - windowWidth)
        if (leftMargin == 0) {
            $('.left-arrow').hide();
        }
    });
    $('.right-arrow').click(function () {
        $('.scrollable').animate({
            marginLeft: "-=" + windowWidth
        }, "medium");

        $('.left-arrow').show();
        leftMargin = (leftMargin + windowWidth);
        if (leftMargin > width - windowWidth) {
            $('.right-arrow').hide();
        }
    });
});