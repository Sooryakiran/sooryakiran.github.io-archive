var myScrollFunc = function() {
    var elem = document.getElementById("header");
    var menu = document.getElementById("menu");
    var opt = document.getElementById("options")
    var y = document.getElementById("wrapid").scrollTop;
    console.log(y);
    if (y >= window.screen.height*0.9) {
        elem.style.opacity = 1.0; 
        menu.style.opacity = 1.0;
    } else {
        elem.style.opacity = 0.0; 
        menu.style.opacity = 0.0;
        if(opt.classList.contains("option-visible")){
            console.log("still visin;e");
            opt.classList.toggle("option-visible");
            opt.classList.toggle("option-invisible");
        }
    }
  };
  
function toggle_menu(){
    elem = document.getElementById("options");
    elem.classList.toggle("option-visible");
    elem.classList.toggle("option-invisible");

}

$(document).ready(function () {
    document.getElementById("wrapid").addEventListener("scroll", myScrollFunc);
    includeHTML();
    

    // document.getElementById('email').on('focus', function() {
    //     console.log("NAME")
    //     document.body.scrollTop = document.getElementById('email').offset().top;
    // });

    
    Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
        console.log('images finished loading');
        AOS.init();
    });
});


function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("load");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("load");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }

  function submit_form() {
    elem = document.getElementById("contact-form");
    btn = document.getElementById("click-bait");
    
    $.getJSON('https://ipgeolocation.abstractapi.com/v1/?api_key=a08e83af610b4d06950c2c42513c4bf7', function(data) {
        document.getElementById("city").value = data.city;
        document.getElementById("country").value = data.country;
        document.getElementById("connection").value = data.connection.connection_type;
        btn.click();
        if($("#contact-form").valid()){
            elem.reset(); 
            $(document.getElementById("feedback")).animate({opacity: 1}, 500);
            $(document.getElementById("feedback")).delay(1000).animate({opacity: 0}, 500);
        }
    });

    
}

