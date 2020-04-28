/**
 * Created by VB.
 */

exports.Cabinet = function(req, res) {
    res.render('Cabinet', {
        pageTitle: 'Book House - Cabinet'
    });
};

exports.Order = function(req, res) {
    res.render('Order', {
        pageTitle: 'Book House - Order'
    });
};

exports.Privacy = function(req, res) {
    res.render('Privacy', {
        pageTitle: 'Book House - Privacy'
    });
};

exports.Terms = function(req, res) {
    res.render('Terms', {
        pageTitle: 'Book House - Terms'
    });
};