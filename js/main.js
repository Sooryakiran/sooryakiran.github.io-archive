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