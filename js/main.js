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

function isOverflown(element) {
    return element.scrollHeight > element.clientHeight;
}
  
// function scroll_custom (num){
//     console.log(num);
//     var evt = document.createEvent('MouseEvents');
//     evt.initEvent('wheel', true, true); 
//     evt.deltaY = -120;
//     document.getElementById("may").dispatchEvent(evt);
// }


// function scrollToElement (selector) {
//     console.log($(selector).offset().top);
//     $('wrapper').animate({
//       scrollTop: $(selector).offset().top
//     }, 2000);    
// };

// $(document).on('click', 'span.internal', function () {
// scrollToElement($(this).attr('href'));
// });


$(document).ready(function () {
    rewrite();
});

function rewrite(){
    var elem = document.getElementById("about-texts");
    // if (elem.small == "0"){
    if(isOverflown(elem)) {
        console.log("Yeah")
        var to_write = document.getElementById("about-me");
        to_write.innerHTML = "Hi!. I am Sooryakiran, a senior undergraduate in Mechanical Engineering from the Indian Institute of Technology Madras. I am a Dual Degree student in Biomedical engineering. I am interested in working on Deep Neural Networks & local learning rules, hardware architectures for deep neural networks, and Computational Neuroscience. <br><br> Other areas of interests that I would like to explore in the future are Quantum Machine Learning, and Neuromorphic Architectures"
    }

    // else{
    //     if(!isOverflown(elem)){
    //         var to_write = document.getElementById("about-me");
    //         to_write.innerHTML = 'Hi!. I am Sooryakiran, a senior undergraduate in Mechanical Engineering from the Indian Institute of Technology Madras. I am a Dual Degree student in Biomedical engineering. I am interested in working on Deep Neural Networks & local learning rules, hardware architectures for deep neural networks, and Computational Neuroscience. <br><br>Other areas of interests that I would like to explore in the future are Quantum Machine Learning, and Neuromorphic Architectures.<br><br> My hobbies are ordering burgers, eating burgers, eating more burgers, and forcing others to eat burgers. Things that make me happy: Trevor Noah, Hassan Minhaj, whitespaces, freedom, distractions.  Things I hate: personalised feeds (Things like these increase polarization; furthermore, the user becomes easily manipulatable.) Politics: still debating myself about "Communism doesn\'t work!" and "Capitalism kills!"'
    //         elem.small = "0";
    //     }
        
    // }

}