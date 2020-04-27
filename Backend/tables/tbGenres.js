
function genresTable(mongoose,app){
    // section for genres
    const genresSchema = new mongoose.Schema({
        name:  {
            type: String,
            required: [1, "Невідомо"]
        },
        image: {
            type: String,
            required: [1, "Немає зображення"]
        }
    });
    const Genres = mongoose.model('Genres', genresSchema);
    const horror = new Genres({name: "Жахи",image:"assets/images/sections/horror.jpg"});
    const detectives = new Genres({name: "Детективи",image:"assets/images/sections/detectives.jpg"});
    const fantasy = new Genres({name: "Фентезі",image:"assets/images/sections/fantasy.jpg"});
    const fantastic = new Genres({name: "Фантастика",image:"assets/images/sections/fantastiс.jpg"});
    const xxcentury = new Genres({name: "ХХ століття",image:"assets/images/sections/xxcentury.jpg"});
    const lovestories = new Genres({name: "Любовні романи",image:"assets/images/sections/lovestories.jpg"});
    // horror.save();
    const genresSet = [horror,detectives,fantastic,fantasy,xxcentury,lovestories];
    /*Genres.insertMany(genresSet,function (err){
        if(err){
            console.log(err);
        }else{
            console.log("Genres are added");
        }
    });*/
    // Genres.deleteMany({}, function(err){
    //     if(err){
    //         console.log(err);
    //     }else {
    //         console.log("All genres were deleted");
    //     }
    // });

    //call main page and send information about genres

    app.get('/' || '/index.html', function (req,res) {

        Genres.find({}, function (err,genres) {
            //if there are no genres, default ones will be set
            if(genres.length === 0){
                Genres.insertMany(genresSet,function (err){
                    if(err){
                        console.log(err);
                    }else{
                        console.log("Genres are added");
                    }
                });
                res.redirect("/"); // goes back to this function again
            } else{res.render('mainPage', { pageTitle: 'Book House - Main', genresList: genres});}
        });
    });
}
module.exports.genresTable=genresTable;