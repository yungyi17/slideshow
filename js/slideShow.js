$(document).ready(function(){
    var slideIndex = 1;
    displaySlides(slideIndex);

    $("a.prev").click(function(){
        var n = -1;
        displaySlides(slideIndex += n);
    });

    $("a.next").click(function(){
        var n = 1;
        displaySlides(slideIndex += n);
    });

    $("span.dot").click(function(){
        var n;

        switch($(this).attr("id")) {
            case "dot1": n = 1; break;
            case "dot2": n = 2; break;
            case "dot3": n = 3; break;
            default: break;    
        }

        displaySlides(slideIndex = n);
    });

    function displaySlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");

        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
    }
});