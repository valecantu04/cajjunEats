$(document).ready(function () {
    $('.submit').click(function (event) {
        console.log('submit')

        var name = $('.name').val()
        var number = $('.number').val()
        var email = $('.email').val()
        var date = $('.date').val()
        var statusElm = $('.status')
        statusElm.empty()

        if (name.length == 0) {
            event.preventDefault()
            statusElm.append('Name is invalid, ')
        }
        if ((email.length < 4 && !email.includes('@') && !email.includes('.')) || (number.length < 6)) {
            event.preventDefault()
            statusElm.append('Email or Number is invalid, ')
        }
        if (date == '') {
            event.preventDefault()
            statusElm.append('Date is invalid')
        }
    })
})


// When the user scrolls the page, execute myFunction 
window.onscroll = function () {
    myFunction()
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

// Smooth scroll
$('#view-team').on('click', function () {
    const images = $('#team-images').position().top;

    $('html, body').animate({
        scrollTop: images
    }, 900);
});

$('#view-food').on('click', function () {
    const images = $('#food-images').position().top;

    $('html, body').animate({
        scrollTop: images
    }, 1000);
});

$('#contact-us').on('click', function () {
    const landing = $('#landing').position().top - 30;

    $('html, body').animate({
        scrollTop: landing
    }, 1000);
});

$('#view-team-banner').on('click', function () {
    const images = $('#team-images').position().top;

    $('html, body').animate({
        scrollTop: images
    }, 900);
});

$('#view-food-banner').on('click', function () {
    const images = $('#food-images').position().top;

    $('html, body').animate({
        scrollTop: images
    }, 1000);
});

$('#contact-us-banner').on('click', function () {
    const contact = $('#contact').position().top;

    $('html, body').animate({
        scrollTop: contact
    }, 1000);
});

$('#get-quote').on('click', function () {
    const landing = $('#landing').position().top - 30;

    $('html, body').animate({
        scrollTop: landing
    }, 1000);
});

$('.prev1').click(function () {
    $('.team-slickSlider').slick('slickPrev');
})

$('.next1').click(function () {
    $('.team-slickSlider').slick('slickNext');
})

$('.prev').click(function () {
    $('.food-slickSlider').slick('slickPrev');
})

$('.next').click(function () {
    $('.food-slickSlider').slick('slickNext');
})

$('.prev2').click(function () {
    $('.event-slickSlider').slick('slickPrev');
})

$('.next2').click(function () {
    $('.event-slickSlider').slick('slickNext');
})

// videoElement.addEventListener('canplaythrough', function () {
//     this.play();
// });