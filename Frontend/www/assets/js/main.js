(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(".sign-in").click(function() {
// function onSignIn() {
    $("#overlay").css('display', 'block');
    alert("Sign-in function");
    $(".sign-in").addClass(".d-none");
    $(".sign-out").removeClass(".d-none");
});
$(".sign-out").click(function() {
// function onSignOut() {
    //TODO
    alert("Sign-out function");
    $("#overlay").css('display', 'block');
    $(".sign-in").addClass(".d-none");
    $(".sign-out").removeClass(".d-none");
});

function off() {
    $("#overlay").css('display', 'none');
}

$("#signup").click(function() {
    $("#first").fadeOut("fast", function() {
        $("#second").fadeIn("fast");
    });
});

$("#signin").click(function() {
    $("#second").fadeOut("fast", function() {
        $("#first").fadeIn("fast");
    });
});

var  initialise = function() {
    //Фукнція віпрацьвуватиме при завантаженні сторінки
    //Тут можна наприклад, зчитати вміст корзини який збережено в Local Storage то показати його
    var prevCart = Storage.read("cart");
    if (prevCart) {
        Cart = prevCart;
    }
};
//init
// var validate = function() {
//     $("form[name='login']").validate({
//         rules: {
//
//             email: {
//                 required: true,
//                 email: true
//             },
//             password: {
//                 required: true,
//
//             }
//         },
//         messages: {
//             email: "Please enter a valid email address",
//
//             password: {
//                 required: "Please enter password",
//
//             }
//
//         },
//         submitHandler: function(form) {
//             form.submit();
//         }
//     });
// };



function register() {

    $("form[name='registration']").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            }
        },

        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            email: "Please enter a valid email address"
        },

        submitHandler: function(form) {
            form.submit();
        }
    });
}

var initialize = function(){
    // validate();
    register();
};

exports.initialize = initialize();
},{}],2:[function(require,module,exports){

$(function(){
    //This code will execute when the page is ready
    var mainPage = require('./book/MainPage');
    mainPage.initialize();


});

},{"./book/MainPage":1}]},{},[2]);
