(function() {
    console.log("%cSite Credits: Designed by www.lwdg.ca, developed by www.vanessarusu.com", "color: #000; font-size: 14px;")
    history.pushState("", document.title, window.location.pathname);
    var links = document.querySelectorAll('#menu-primary-menu li.menu-item');
    for(var i=0; i < links.length; i++) {
        links[i].classList.remove('current-menu-item');
    }

    setTimeout(function(){
        var html = '<video id="ageGateVideo" muted="" playsinline="" poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" style="background: transparent; z-index:100; min-height: 100vh; transition: all 1s ease; left: 0px; top: 0px; opacity: 0; min-width: 100vw; position:fixed;"><source src=\"https://lwdgdev.ca/gre/wp-content/uploads/20210310_KENNY-HEAD_NOGlow_720p.mov\" type="video/mp4"></video>';
        var hook = document.querySelector(".age-gate-wrapper");
    },10)

   
    setTimeout(function(){
        var vid = document.querySelector("#ageGateVideo");
        vid.play();
        vid.style.opacity = 1;
    },400);

    setTimeout(function(){
        document.querySelector(".age-gate-wrapper .age-gate").style.opacity = 1;
    },6600)

    hook.insertAdjacentHTML("beforebegin", html);
})();


