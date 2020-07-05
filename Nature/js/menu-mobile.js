$(".mobile-btn").click(function() {
    $(this).toggleClass("active");
    $("[data-menu='navegacao'].mobile").toggleClass("active");
});