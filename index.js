function copyToClipboard(){
    var email = "almeidahely@gmail.com"
    const clipBoard = navigator.clipboard;
    clipBoard.writeText(email);
    $(this).text("Copied to Clipboard");
    $("#copy-to-clipboard-footer").addClass("copied");
    $("#copy-to-clipboard").addClass("copied-contact");
}

$("#copy-to-clipboard-footer").click(copyToClipboard);
$("#copy-to-clipboard").click(copyToClipboard);

$("#portfolio").hover(function(){
    $("#copy-to-clipboard").text("Contact"); 
    $("#copy-to-clipboard-footer").text("Contact"); 
    $("#copy-to-clipboard-footer").removeClass("copied");
    $("#copy-to-clipboard").removeClass("copied-contact");
});



$(document).ready(function() {
    var $scrollToTopBtn = $("#scrollToTopBtn");

    $(window).scroll(function() {
        if ($(this).scrollTop() > 20) {
            $scrollToTopBtn.fadeIn();
        } else {
            $scrollToTopBtn.fadeOut();
        }
    });

    $scrollToTopBtn.click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});


function mobileMenu(event) {
    // Detener la propagación del evento clic para evitar problemas de mostrar/ocultar rápidamente
    event.preventDefault();

    $(".menu").toggleClass("mobileMenuShow");

    // Toggle a class on the body to prevent scrolling when the mobile menu is open
    $("body").toggleClass("no-scroll");
}

$(".menu-mobile img").click(mobileMenu);
