$(document).ready(function () {
    $(window).on('scroll', function () {
        let posicion = $('#jqpr').offset();
        if ($(window).scrollTop() >= posicion.top) {
            $('header').removeClass('transparent');
        } else {
            $('header').addClass('transparent');
        }

    }
    )
    $('a').on('click', function () {
        if (this.hash !== '') {
            let hash = this.hash ;
            $('html,body').animate({
                scrollTop: $(hash).offset().top
            }, 800)
        }
    })
})



