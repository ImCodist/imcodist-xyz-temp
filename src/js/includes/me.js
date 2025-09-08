$(function() {
    if (isBirthday) {
        $("#me_container #goober_container #goober").each(function() {
            if ($(this).hasClass("left")) {
                $(this).prop("src", "/assets/images/me/me_codist_birthday.gif")
            }
            if ($(this).hasClass("right")) {
                $(this).prop("src", "/assets/images/me/me_fox_birthday.gif")
            }
        });
    }
})