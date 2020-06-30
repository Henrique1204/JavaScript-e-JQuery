$(window).on("scroll", ()=> {
    let windowTop = $(this).scrollTop();

    $("div").each(function() {
        $(this).attr("class", `${ (windowTop > $(this).offset().top - 200) ? "amostra" : "escondido"}`);
    })
});