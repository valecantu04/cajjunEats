$(document).ready(function () {
    $('.submit').click(function (event) {
        console.log('submit')

        var name = $('.name').val()
        var number = $('.number').val()
        var email = $('.email').val()
        var date = $('.date').val()
        var address = $('.address').val()
        var numPeople = $('.num-people').val()
        var message = $('.message').val()
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

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Thumbnail image controls
function currentSlide1(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function showSlides1(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides1");
    var dots = document.getElementsByClassName("dot1");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}