function initLiqPay() {
//    var PizzaCart = require('./pizza/PizzaCart');
    var API = require('./API');
//    var sum = PizzaCart.getPizzaSum();
//    var pizza = '';

    // PizzaCart.getPizzaInCart().forEach(function (piz) {
    //     pizza += piz.quantity + ' шт. ' + piz.pizza.title + '(' + (piz.size === 'big_size' ? 'Велика' : 'Мала')
    //         + ');\n'
    // });
    var Storage = require('./book/Storage');
    var book_info = Storage.read('book');
    var order_info = {
        amount: $('.info-price').text(),
        description: 'Замовлення піци: ' + $('#inputName').val() +
            '\nТелефон: ' + $('#inputPhone').val()  +
            '\nЗамовлення: ' + $('.info-name').text() + '(' + $('.info-author').text() + ')' +
            '\nРазом: ' + $('.info-price').text() + ' грн'
    };

    API.createOrder(order_info, function (err, data) {
        if (!err) {
            LiqPayCheckout.init({
                data: data.data,
                signature: data.signature,
                embedTo: "#liqpay",
                mode: "popup" // embed || popup
            }).on("liqpay.callback", function (data) {
                console.log(data.status);
                console.log(data);
            }).on("liqpay.ready", function (data) {
                // ready
            }).on("liqpay.close", function (data) {
                // close
                $('.info-line-price').hide();
                $('.info-promo').text(book_info.promocode);
                $('.info-line-promo').show();
            });
        }
    });
}

exports.initLiqPay = initLiqPay;
