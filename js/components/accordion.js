$(function() {
    function updateAccordion(accordion) {
        $(accordion).removeClass("active");

        var next = $(accordion).next();
        if (next.hasClass("accordion_content")) {
            next.css("max-height", 0);
            if (next.hasClass("accordion_content") && next.hasClass("active")) {
                $(accordion).addClass("active");
                next.css("max-height", next.prop("scrollHeight") + 20);
            }
        }
    }

    $(".accordion").each(function() {
        updateAccordion(this);
    });

    $(".accordion").click(function() {
        var next = $(this).next();

        if (next.hasClass("accordion_content")) {
            next.toggleClass("active");
        }

        updateAccordion(this);
    });
});