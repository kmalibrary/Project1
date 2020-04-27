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
            required: true
        },
        password: {
            type: String,
            required: true
        },
        savedBooks:[String],
        transactions:[{
            number: Number,
            sum: Number,
            book: String
        }]
    });
    const User = mongoose.model('Users', userSchema);
}
module.exports.usersTable=usersTable;