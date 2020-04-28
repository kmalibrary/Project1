/**
 * Created by VB.
 */
var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');

function configureEndpoints(app) {
    var pages = require('./pages');
    var api = require('./api');

    //Налаштування URL за якими буде відповідати сервер
    //Отримання списку книг
    app.get('/api/get-book-list/', api.getBookList);
    app.post('/api/create-order/', api.createOrder);

    //Сторінки
    //Головна сторінка
    // app.get('/', pages.mainPage(genresList));

    //Other pages
    // app.get('/index.html', pages.mainPage(genresList));
    app.get('/cabinet.html', pages.Cabinet);
    app.get('/order.html', pages.Order);
    // app.get('/book.html', pages.Book);
    // app.get('/genres.html', pages.Genres);
    app.get('/privacy.html', pages.Privacy);
    app.get('/terms.html', pages.Terms);

    //Якщо не підійшов жоден url, тоді повертаємо файли з папки www
    app.use(express.static(path.join(__dirname, '../Frontend/www')));
}

function startServer(port) {
    //Створюється застосунок
    var app = express();
    var mongoose = require('./mongoose');

    //Налаштування директорії з шаблонами
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    //Налаштування виводу в консоль списку запитів до сервера
    app.use(morgan('dev'));

    //Розбір POST запитів
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    mongoose.mongooseActions(app);
    //Налаштовуємо сторінки
    configureEndpoints(app);

    //Запуск додатка за вказаним портом
    app.listen(port, function () {
        console.log('My Application Running on http://localhost:'+port+'/');
    });
}

exports.startServer = startServer;