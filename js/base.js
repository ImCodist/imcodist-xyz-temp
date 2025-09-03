$(function() {
    $(".squeakable").click(function() {
        var audio = new Audio("/assets/audio/squeaky/squeak-" + (Math.floor(Math.random() * 7) + 1) + ".ogg");
        audio.play();
        
        var squeaker = $(this);
        squeaker.removeClass("run");
        setTimeout(function() {
            squeaker.addClass("run");
        }, 1);
    })
})