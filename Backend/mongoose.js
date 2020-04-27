const mongoose = require('mongoose');
var genresTB = require('./tables/tbGenres');
var booksTB = require('./tables/tbBooks');
var usersTB = require('./tables/tbUsers');

function mongooseActions(app) {

    mongoose.connect('mongodb+srv://admin-vika:test123@cluster0-wwups.mongodb.net/bookHouseDB', {useNewUrlParser: true, useUnifiedTopology: true});

    genresTB.genresTable(mongoose,app);
    booksTB.booksTable(mongoose,app);
    usersTB.usersTable(mongoose,app);


}

module.exports.mongooseActions=mongooseActions;