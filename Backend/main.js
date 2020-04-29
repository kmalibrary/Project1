/**
 * Created by VB.
 */
var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
// var passport = require("passport");
// var LocalStrategy = require("passport-local");
// var passportLocalMongoose = require("passport-local-mongoose");

function mongooseActions(app) {
    var genresTB = require('./tables/tbGenres');
    var booksTB = require('./tables/tbBooks');
    // var usersTB = require('./tables/tbUsers');

    mongoose.connect('mongodb+srv://admin-vika:test123@cluster0-wwups.mongodb.net/bookHouseDB', {useNewUrlParser: true, useUnifiedTopology: true});

    genresTB.genresTable(mongoose,app);
    booksTB.booksTable(mongoose,app);
}
function usersTable(app){

<<<<<<< HEAD
    //section for users - authorization

    const userSchema = new mongoose.Schema({
        icon:String,
        username:String,
        password:String,
        savedBooks:[{
            title:String,
            author:String,
            icon:String
        }],
        transactions:[{
            number: Number,
            book: {
                title:String,
                author:String,
                icon:String,
                promocode:String,
                price: Number
=======
    var tCounter = 0;

    //section for users - authorization

    const userSchema = new mongoose.Schema({
        icon: { type: String, default: 'assets/images/profile-img.png' },
        username:{ type: String, default: 'user' },
        email:{
            type:String,
            default: 'your@gmail.com'
        },
        password:String,
        savedBooks:[{
            title:{ type: String, default: 'невідомо' },
            author:{ type: String, default: 'невідомо' },
            icon:{ type: String, default: 'assets/images/reader.png' },
        }],
        transactions:[{
            number: {type: Number, default: ++tCounter },
            name: { type: String, default: 'user' },
            telephone: { type: String, default: '0000000000' },
            book: {
                title:{ type: String, default: 'невідомо' },
                author:{ type: String, default: 'невідомо' },
                icon:{ type: String, default: 'assets/images/reader.png' },
                promocode:String,
                price: {type: Number, default: 0 },
>>>>>>> 61437d8599adf072e3c90480cf879da8d909a98b
            }
        }]
    });
    // userSchema.plugin(passportLocalMongoose);
    const User = mongoose.model('Users', userSchema);
    const defaultUser = new User({
<<<<<<< HEAD
        icon:'Frontend/www/assets/images/profile-img.png',
        username: 'admin-vika',
=======
        icon:'assets/images/profile-img.png',
        username: 'admin-vika',
        email: "vik.boichenko@gmail.com",
>>>>>>> 61437d8599adf072e3c90480cf879da8d909a98b
        password: 'test123',
        savedBooks: [{
            title:"Воно",
            author:"Стівен Кінг",
            icon:'assets/images/books/book-1.jpg',
        },{
            title:"Оповідання про Шерлока Холмса",
            author:"Артур Конан Дойл",
            icon:'assets/images/books/book-2.jpg'
        }],
        transactions: [{
            number: 11,
<<<<<<< HEAD
=======
            name:"vik",
            telephone:"0508802332",
>>>>>>> 61437d8599adf072e3c90480cf879da8d909a98b
            book: {
                title:"Воно",
                author:"Стівен Кінг",
                icon:'assets/images/books/book-1.jpg',
                promocode:'111',
                price: 100
            }
        },{
            number: 12,
<<<<<<< HEAD
=======
            name:"vik",
            telephone:"0508802332",
>>>>>>> 61437d8599adf072e3c90480cf879da8d909a98b
            book: {
                title:"Оповідання про Шерлока Холмса",
                author:"Артур Конан Дойл",
                icon:'assets/images/books/book-2.jpg',
                promocode:'112',
                price: 120
            }
        }]

    });
<<<<<<< HEAD
    // defaultUser.save();
=======

    // defaultUser.save();
    var amountOfSave = 0;
>>>>>>> 61437d8599adf072e3c90480cf879da8d909a98b
    // console.log("defaultUser is saved");

   /* app.use(passport.initialize());
    app.use(passport.session());
    app.use(require("express-session")({
        secret:"Hello World, this is a session",
        resave: false,
        saveUninitialized: false
    }));
    passport.use(new LocalStrategy(User.authenticate()));

    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser())

    app.get("/secret",function(req, res){
        res.render("secret");
    });
    app.get("/register", function(req, res){
        res.render("register");
    });

    app.post("/register", function(req, res){
        User.register(new User({
                username : req.body.username
            }),
            req.body.password, function(err, user){
                if(err){
                    console.log(err);
                    return res.render('register');
                }
                passport.authenticate("local")(req, res, function(){
                    res.redirect("/secret");
                });
            });
    });
    app.get("/login", function(req, res){
        res.render("login");
    });
    app.post("/login", passport.authenticate("local"), {
        successRedirect: "/secret",
        failureRedirect: "/login"
    }, function(req, res) {
    });
    app.get("/logout", function(req, res){
        req.logout();
        res.redirect("/");
    });
    function isLoggedIn(req, res, next){
        if(req.isAuthenticated()){
            return next();
        }
        res.redirect("/login");
    }

*/
<<<<<<< HEAD
    // case for a particular book book
    app.get('/cabinet', function (req,res) {
        // alert(bookId);
        User.find({username:'admin-vika'}, function (err,userOne) {
            // if(err){
                console.log(err);
                res.render('NotFoundPage', { pageTitle: 'Book House - Not Found Page', message: "<br>Цю сторінку не було знайдено"})
            // } else{res.render('Cabinet', { pageTitle: 'Book House - Cabinet', user: userOne});}
=======
   //save here works only once
   app.post('/settings', function (req,res) {
       if(amountOfSave===1) {
           alert("No more changing settings");
           res.render('Cabinet', { pageTitle: 'Book House - Cabinet', user: defaultUser});
       }else {
           var newName = req.body.username;
           var newEmail = req.body.email;
           var newPassword = req.body.password;
           console.log('name : ' + newName + ", email: " + newEmail + ", password: " + newPassword);
           // var newIcon = req.body.icon;
           User.findOne({username: defaultUser.username}, function (err, userOne) {
               if (err) {
                   console.log(err);
                   res.render('NotFoundPage', {
                       pageTitle: 'Book House - Not Found Page',
                       message: "<br>Цю сторінку не було знайдено"
                   })
               } else {
                   userOne.username = newName;
                   userOne.email = newEmail;
                   userOne.password = newPassword;
                   console.log('elements are changed');
                   userOne.save();
                   console.log("user was updated");
                   amountOfSave += 1;
                   res.render('Cabinet', {pageTitle: 'Book House - Cabinet', user: userOne});
               }
           });
       }
   });

    // case cabinet for a particular user
    app.get('/cabinet', function (req,res) {
        User.findOne({username: defaultUser.username}, function (err,userOne) {
            if(err){
                console.log(err);
                res.render('NotFoundPage', { pageTitle: 'Book House - Not Found Page', message: "<br>Цю сторінку не було знайдено"})
            } else{res.render('Cabinet', { pageTitle: 'Book House - Cabinet', user: userOne});}
>>>>>>> 61437d8599adf072e3c90480cf879da8d909a98b
        });
    });
    //register user - sign up
    app.post('#',function (req,res) {
        var username = req.body.name;
        var userPassword = req.body.password;
        console.log("Name: "+username + " , password: " + userPassword);
        const newUser = new User({
            name: username,
            password: userPassword
        });
        newUser.save();
        console.log("New user is created");
    });
<<<<<<< HEAD
    // TODO sign in user
    // TODO sign out user
=======
>>>>>>> 61437d8599adf072e3c90480cf879da8d909a98b
}

function configureEndpoints(app) {
    var pages = require('./pages');
    var api = require('./api');
    //Налаштування URL за якими буде відповідати сервер
    //Отримання списку книг
    // app.get('/api/get-book-list/', api.getBookList);
<<<<<<< HEAD
     app.post('/api/create-order/', api.createOrder);
=======
    app.post('/api/create-order/', api.createOrder);
>>>>>>> 61437d8599adf072e3c90480cf879da8d909a98b

    //Сторінки
    // app.get('/cabinet.html', pages.Cabinet);
    app.get('/order.html', pages.Order);
    app.get('/privacy.html', pages.Privacy);
    app.get('/terms.html', pages.Terms);

    //Якщо не підійшов жоден url, тоді повертаємо файли з папки www
    app.use(express.static(path.join(__dirname, '../Frontend/www')));
}

function startServer(port) {
    //Створюється застосунок
    var app = express();

    //Налаштування директорії з шаблонами
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    //Налаштування виводу в консоль списку запитів до сервера
    app.use(morgan('dev'));

    //Розбір POST запитів
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    mongooseActions(app);
    usersTable(app);
    //Налаштовуємо сторінки
    configureEndpoints(app);

    //Запуск додатка за вказаним портом
    app.listen(port, function () {
        console.log('My Application Running on http://localhost:'+port+'/');
    });
}

exports.startServer = startServer;