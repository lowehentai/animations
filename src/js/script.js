new CircleType(document.getElementById('demo1'));


var a = 1,
    b = 1,
    timers,

    timer = setInterval(function () {
        if (a == 1) {
            var duration = 10;
            $("span").each(function (index) {
                $(this).delay(duration * index).fadeOut(duration).css("display", "block");
            });
            a++;

            timers = setInterval(function () {
                if (b == 1) {
                    var duration = 10;
                    $("span").each(function (index) {
                        $(this).delay(duration * index).fadeIn(duration).css("display", "none");
                    });
                    b++;
                    setInterval(function () {
                        document.getElementById('loader').classList.remove('loader_hidden');
                        document.getElementById('demo1').classList.add('container_animation');
                    }, 700);
                    setInterval(function () {
                        document.getElementById('inner').classList.remove('clock-inner_hidden');
                    }, 8000);
                }
            }, 600);
        }
    }, 600);


// document.getElementById('demo1').fadeIn();
// document.getElementById('inner').classList.remove('clock-inner_red');

// document.getElementById('demo1').classList.add('container_green');
// document.getElementById('inner').classList.add('clock-inner_green');