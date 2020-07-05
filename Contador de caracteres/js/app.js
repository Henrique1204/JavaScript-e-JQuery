$("textarea").on("keyup paste", function () {
    setTimeout(function () {
        $(".caracteres").text($("textarea").val().length);
        $(".palavras").text($("textarea").val().trim().split(" ").length);
    }, 200);
});