$(document).ready(function () {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '7530937511',
        limit: 10,
        resolution: 'standard_resolution',
        accessToken: '7530937511.1677ed0.35389b308fff443cb2f876b80a70bd6b',
        sortBy: 'most-recent',
        template: '<div class="col-lg-4 gallery instaimg"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();
});