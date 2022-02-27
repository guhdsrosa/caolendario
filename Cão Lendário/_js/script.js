$(document).ready(function() {
    // progress bar

    let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Circle(containerA, {

        color: '#fff',
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#321159' },
        to: { color: '#ff9400' },

        step: function(state, circle) {

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 60);

            circle.setText(value);

        }



    });

    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB, {

        color: '#fff',
        strokeWidth: 8,
        duration: 1600,
        from: { color: '#aaa' },
        to: { color: '#ff9400' },

        step: function(state, circle) {

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 355);

            circle.setText(value);

        }



    });

    let containerC = document.getElementById("circleC");

    let circleC = new ProgressBar.Circle(containerC, {

        color: '#fff',
        strokeWidth: 8,
        duration: 1800,
        from: { color: '#aaa' },
        to: { color: '#ff9400' },

        step: function(state, circle) {

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 544);

            circle.setText(value);

        }
    });

    let containerD = document.getElementById("circleD");

    let circleD = new ProgressBar.Circle(containerD, {

        color: '#fff',
        strokeWidth: 8,
        duration: 2000,
        from: { color: '#aaa' },
        to: { color: '#ff9400' },

        step: function(state, circle) {

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 50);

            circle.setText(value);

        }



    });

    //iniciando o loader com rolagem

    let DataAreaOffset = $('#dados-area').offset();
    let stop = 0;

    $(window).scroll(function(e) {

        let scroll = $(window).scrollTop();

        if (scroll > (DataAreaOffset.top - 500) && stop == 0) {
            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;
        }
    });
});

setTimeout(function() {

    $('#help').parallax({ imageSrc: './_imagens/fundo_para.jpg' })

}, 250);

setTimeout(function() {

    $('#dados-area').parallax({ imageSrc: './_imagens/imagem_fundo.jpg' })

}, 250);