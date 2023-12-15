/* Función copiar */
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

$("main").hover(function(){
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
