function usersTable(mongoose,app){
    //section for users - authorization

    const userSchema = new mongoose.Schema({
        icon: String,
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            min:8,
            max:20
        },
        savedBooks:[String],
        transactions:[{
            number: Number,
            book: String
        }]
    });
    const User = mongoose.model('Users', userSchema);
    // const defaultUser = new User({
    //
    // });
    const usersSet = [];

    app.get('/cabinet', function (req,res) {
            // if(!isAuthorised){
        // Users.find({id}, function (err,user) {
            //if there are no genres, default ones will be set
            // if(usersSet.length === 0)
                // Users.insertMany(genresSet,function (err){
                //     if(err){
                //         console.log(err);
                //     }else{
                //         console.log("Genres are added");
                //     }
                // });
                // res.redirect("/"); // goes back to this function again
            // } else{
            //     Users.find({id}, function (err,user) {
            //         res.render('Cabinet', { pageTitle: 'Book House - Cabinet', transactions: user.transactions,
            //         savedBooks: user.savedBooks, userCab: user
            //      });
            //     });
            // }
    });
}
module.exports.usersTable=usersTable;