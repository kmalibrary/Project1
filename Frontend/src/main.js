
$(function(){
    //This code will execute when the page is ready
    var mainPage = require('./book/MainPage');
    var cabinet = require('./book/Cabinet');
    var google = require('./GoogleMaps');
    var bookItem = require('./book/BookItem');
    var orderPage = require('./book/OrderPage');

    cabinet.initialize();
    mainPage.initialize();
    google.initialize();
    bookItem.initialize();
    orderPage.initialize();
});
