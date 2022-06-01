function openMenu (){
    var x = document.getElementsByClassName('navigation');
    if(x.style.display === "block") {
        x.style.display = "none";
    }   else {
        x.style.display ="block";
    }
}

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.info_header', {
    delay: 150,
    origin: 'top'
});


