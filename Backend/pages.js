/**
 * Created by VB.
 */
// exports.mainPage = function(req, res) {
//     res.render('mainPage', {
//         pageTitle: 'Book House - Main', genresList : list
//     });
// };

exports.Cabinet = function(req, res) {
    res.render('Cabinet', {
        pageTitle: 'Book House - Cabinet'
    });
};

exports.Book = function(req, res) {
    res.render('Book', {
        pageTitle: 'Book House - Book'
    });
};
exports.Genres = function(req, res) {
    res.render('Genres', {
        pageTitle: 'Book House - Genre'
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