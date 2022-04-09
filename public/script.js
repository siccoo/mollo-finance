import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

$(document).ready(function() {
    $(".navbar-toggler").on("click", function() {
        $(".mobileMenu").toggleClassName("open");
    })
});