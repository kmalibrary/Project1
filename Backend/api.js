/**
 * Created by chaika on 09.02.16.
 */

var LIQPAY_PUBLIC_KEY = 'i27621599616';
var LIQPAY_PRIVATE_KEY = 'TMHaYfguTpnRCSbkbVjVRfxBZUQyopjgFiBOPrvN';

var Book_List = require('./data/Book_List');

exports.getBookList = function(req, res) {
    res.send(Book_List);
};

function base64(str) {
    return new Buffer(str).toString('base64');
}

var crypto = require('crypto');

function sha1(string) {
    var sha1 = crypto.createHash('sha1');
    sha1.update(string);
    return sha1.digest('base64');
}

exports.createOrder = function(req, res) {
    var order_info = req.body;
    console.log("Creating Order", order_info);

    var order = {
        version: 3,
        public_key: LIQPAY_PUBLIC_KEY,
        action: "pay",
        amount: order_info.amount,
        currency: "UAH",
        description: order_info.description,
        order_id: Math.random(),
        //!!!Важливо щоб було 1, бо інакше візьме гроші!!!
        sandbox: 1
    };

    var data = base64(JSON.stringify(order));
    var signature = sha1(LIQPAY_PRIVATE_KEY + data + LIQPAY_PRIVATE_KEY);

    res.send({
        data: data,
        signature: signature
    });
};