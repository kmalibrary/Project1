
$(function(){
    //This code will execute when the page is ready
    var mainPage = require('./book/MainPage');
    var cabinet = require('./book/Cabinet');
    var google = require('./GoogleMaps');
    cabinet.initialize();
    mainPage.initialize();
    google.initialize();


});
