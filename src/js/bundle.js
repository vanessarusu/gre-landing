(function() {
    console.log("%cSite Credits: Designed by www.lwdg.ca, developed by www.vanessarusu.com", "color: #000; font-size: 14px;")
    history.pushState("", document.title, window.location.pathname);
    var links = document.querySelectorAll('#menu-primary-menu li.menu-item');
    for(var i=0; i < links.length; i++) {
        links[i].classList.remove('current-menu-item');
    }
})();