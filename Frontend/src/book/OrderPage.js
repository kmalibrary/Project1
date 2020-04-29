var Storage = require('./Storage');
var API = require('../API');
var LiqPay = require('../LiqPay');

var user_info = {
    name: '',
    phone: ''
};

function isRight(form) {
    form.removeClass('has-error');
    form.addClass('has-success');
    form.find('.help').hide();
}

function isWrong(form) {
    form.removeClass('has-success');
    form.addClass('has-error');
    form.find('.help').show();
}

function validName() {
    if (/^[А-Яа-я ІіЄєЇїҐґ]+$/.test($('#inputName').val())) {
        isRight($('.name-group'));
        user_info.name = $('#inputName').val();
        Storage.write('info', user_info);
        return true;
    } else {
        isWrong($('.name-group'));
        return false;
    }
}

function validPhone() {
    if (/(^[+]380[0-9]{9}$)|(^0[0-9]{9}$)/.test($('#inputPhone').val())) {
        isRight($('.phone-group'));
        user_info.phone = $('#inputPhone').val();
        Storage.write('info', user_info);
        return true;
    } else {
        isWrong($('.phone-group'));
        return false;
    }
}

function readData() {
    if (validName() && validPhone()) {
        API.createOrder({
            name: $('#inputName').val(),
            phone: $('#inputPhone').val(),
            order: Storage.read('book')
        }, function (err, data) {

            // alert('in callback');
            if (!err) {
                // alert('All all is right');
                LiqPay.initLiqPay();
            }
            else {
                console.log(err);
                console.log('liqpay')
            }
        });
        // alert('All is right');
    }
    else
        alert('Заповніть всі поля правильно!');
}

function initialize() {
}

$('#inputName').on('keyup', function (e) {
    validName();
});
$('#inputPhone').on('keyup', function (e) {
    validPhone();
});

$('.next').click(readData);

var book_info = Storage.read('book');
console.log('from stor' + book_info.name + book_info.author + book_info.price);
$('.info-name').text(book_info.name);
$('.info-author').text(book_info.author);
$('.info-price').text(book_info.price);

// var user_info = Storage.read('info');
//
// if (user_info) {
//     if (user_info.name) {
//         $('#inputName').val(user_info.name);
//         validName();
//     }
//     if (user_info.phone) {
//         $('#inputPhone').val(user_info.phone);
//         validPhone();
//     }
// }

exports.initialize = initialize;