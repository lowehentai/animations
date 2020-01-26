new CircleType(document.getElementById('demo1'));

// var a = 1,
//     timer = setInterval(function () {
//         if (a == 1) {
//             document.getElementById('demo1').classList.add('container_red');
//             a++;
//         }
//     }, 1000);

let b = 1,
    timerBeta = setInterval(function () {
        if (b == 1) {
            document.getElementById('inner').classList.add('clock-inner_red');
            b++;
        }
    }, 1200);

let a = 1,
    timerAlpha = setInterval(function () {
        if (a == 1) {
            document.getElementById('demo1').classList.remove('container_red');
            document.getElementById('inner').classList.remove('clock-inner_red');

            document.getElementById('demo1').classList.add('container_green');
            document.getElementById('inner').classList.add('clock-inner_green');

            setInterval(function () {
                document.getElementById('inner').classList.remove('clock-inner_green');
                document.getElementById('demo1').classList.remove('container_green');
                document.getElementById('demo1').classList.add('container_no-animate');

            }, 1500);
            a++;
        }
    }, 6000);