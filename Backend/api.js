/**
 * Created by chaika on 09.02.16.
 */
var Book_List = require('./data/Book_List');

exports.getBookList = function(req, res) {
    res.send(Book_List);
};

exports.createOrder = function(req, res) {
    var order_info = req.body;
    console.log("Creating Order", order_info);

    res.send({
        success: true
    });
};