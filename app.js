//jshint esversion:6
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bookHouseDB', {useNewUrlParser: true, useUnifiedTopology: true});
const genresSchema = new mongoose.Schema({
    name: String,
});

const bookSchema = new mongoose.Schema({
    promocode:  {
        type: String,
        required: true
    },
    icon:  {
        type: String,
        required: [1, "Немає зображення"]
    },
    title:  {
        type: String,
        required: [1, "Невідомо"]
    },
    author:  {
        type: String,
        required: [1, "Невідомо"]
    },
    cycle: String,
    type:  {
        type: String,
        required: [1, "Невідомо"]
    },
    genre: [{
        type: String,
        required: [1, "Невідомо"]
    }],
    status: String,
    minAge: String,
    price: {
        type: Number,
        min:0,
        max:1000
    },
    currency:  {
        type: String,
        required: true
    },
    reviews: [
        {
            authorName: String,
            comment: String
        }
    ],
    description:  {
        type: String,
        required: true
    },
    is_new: Boolean,
    is_popular: Boolean,
    locationNote: String,
    location: String,
    authorNote: String,
    file: String
});

const Book = mongoose.model('Book', bookSchema);
const Genres = mongoose.model('Genres', genresSchema);
const horror = new Genres({
    name: "Жахи"
});
const detectives = new Genres({
    name: "Детективи"
});
const fantasy = new Genres({
    name: "Фентезі"
});
const fantastic = new Genres({
    name: "Фантастика"
});
const xxcentury = new Genres({
    name: "ХХ століття"
});
const lovestories = new Genres({
    name: "Любовні романи"
});
// Genres.insertMany([horror,fantasy,fantastic,detectives,xxcentury,lovestories],function (err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Genres are added");
//     }
// });

const book1 = new Book({
    promocode: "000001",
    icon:'assets/images/books/book-1.jpg',
    title: "Воно",
    author: "Стівен Кінг",
    cycle:"Деррі",
    type: 'Роман',
    genre: [horror, fantastic],
    status: "Завершено",
    minAge: '16+',
    price: 120,
    currency:"грн",
    reviews:[
        {
            authorName:"Джон",
            comment:"Неймовірний трилер, раджу всім"
        },
        {
            authorName:"Катя",
            comment:"Занадто страшно, не для мене"
        },
    ],
    description: "Колись давно семеро підлітків лицем до лиця зіткнулися " +
        "із невимовним Жахом — і змогли перемогти. Але багато років по тому істота," +
        " що не має імені, повертається, щоб помститися… Воно наче випірнуло з нічних кошмарів. " +
        "Воно живиться страхом і ненавистю. Воно причаїлося всюди… " +
        "Старі друзі мусять зустрітися з Ним і знову зазирнути у вічі справжньому жаху…",
    is_new:true,
    is_popular:true,
    locationNote:"Це місце зйомок будинку Пеннівайза, створеного за мотивами книжки",
    location:"<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d721.4679600129049!2d-79.34183946978696!3d43.67163516675464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb9669e4667b%3A0xa5e0896c7ac90e29!2sCranfield%20House!5e0!3m2!1suk!2sua!4v1587805618878!5m2!1suk!2sua\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>",
    authorNote: " Я зведу вас з розуму, а потім уб’ю…",
    file:"assets/books/it-stephen-king.fb2"

});
const book2 = new Book({
    promocode: "000010",
    icon:'assets/images/books/book-2.jpg',
    title: "Оповідання про Шерлока Холмса",
    author: "Артур Конан Дойл",
    type: 'Роман',
    genre: detectives,
    status: "Завершено",
    minAge: '0+',
    price: 110,
    currency:"грн",
    reviews:[
        {
            authorName:"Саша",
            comment:"Неймовірний детектив, раджу всім"
        },
        {
            authorName:"Соня",
            comment:"Занадто цікаво, не відірватись від книжки"
        },
    ],
    description: "Перу видатного англійського письменника, публіциста і " +
        "журналіста сера Артура Конана Дойла (1859—1930) належать історичні, пригодницькі, " +
        "фантастичні романи. Але у світову літературу він увійшов як творець видатного сищика " +
        "Шерлока Холмса, який володіє дедуктивним методом не гірше, ніж смичком своєї улюбленої скрипки." +
        "Холмс — видатна особистість, людина інтелектуальна, прониклива і енергійна. " +
        "Для нього немає безнадійних справ, йому завжди вдається викрити найзаплутаніші й " +
        "найзагадковіші злочини.Геніальному детективові та його другові доктору Ватсону Дойл " +
        "присвятив понад півсотні творів. До книжки увійшли кілька кращих оповідань.",
    is_popular:true,
    locationNote:"Це місце зйомок будинку Шерлока Холма",
    location:"<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.2905627170126!2d-0.13909638422934162!3d51.52623027963815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b263987dec3%3A0x9080f2713333fe19!2zMTg3IE4gR293ZXIgU3QsIExvbmRvbiBOVzEgMk5KLCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3RltGP!5e0!3m2!1suk!2sua!4v1587805315863!5m2!1suk!2sua\" width=\"400\" height=\"300\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>",
    authorNote: "",
    file:"assets/books/sherlock-holms.fb2"

});
const book3 = new Book({
    promocode: "000011",
    icon:'assets/images/books/book-3.jpg',
    title: "Пурпурові вітрила",
    author: "Олександр Грін",
    type: 'Роман',
    genre: lovestories,
    status: "Завершено",
    minAge: '12+',
    price: 100,
    currency:"грн",
    reviews:[
        {
            authorName:"Гном",
            comment:"Неймовірне кохання, прям повірив"
        },
        {
            authorName:"Соня",
            comment:"Соплі з сахаром, повсюду одне й теж саме"
        },
    ],
    description: "Повість-феєрія \"Пурпурові вітрила\" — це зворушлива і романтична казка, " +
        "що підносить силу любові й людського духу, справжня поема про диво, яке творить " +
        "людина своїми руками. В основу роману \"Та, що біжить по хвилях\" покладено романтику моря, " +
        "загадкові історії кораблів, таємничі матроські легенди. Головний герой твору шукає свій ідеал " +
        "і свою мрію і віднаходить справжні скарби духовного життя.\n" +
        "Для дітей середнього і старшого шкільного віку.",
    file:"assets/books/Purpurovi-vitryla.fb2"
});
// book1.save().then(() => console.log('book is saved'));

// Book.insertMany([book1,book2,book3],function (err) {
//     if(err){
//         console.log(err);
//     }else {
//         console.log("Elements are added");
//     }
// });

Book.find(function (err,books) {
    if(err){
        console.log(err);
    }else {
        mongoose.connection.close();
        books.forEach(function(book){
            console.log(book.title + " " + book.genre);
        });
    }
});