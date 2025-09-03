$(function() {
    $("img").css("cursor", "pointer")
    $("img").click(function() {
        var audio = new Audio("/assets/audio/money-soundfx.mp3");
        audio.play();
    })
})