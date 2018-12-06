$(document).ready(function (){
    $('.submit').click(function (event){
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
        if((email.length < 4 && !email.includes('@') && !email.includes('.')) || (number.length < 6 )){
            event.preventDefault()
            statusElm.append('Email or Number is invalid, ')
        }
        if (date == '') {
            event.preventDefault()
            statusElm.append('Date is invalid')
        }
    })
})

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

