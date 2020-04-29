
var Storage = require('./Storage');

function initialize() {

}

$('#buy').click(function () {
    var book = {
        name: $('.book-name').text(),
        author: $('#author').text(),
        price: $('#price').text(),
        promocode: $('#promocode').text()
    };

    Storage.write('book', book);
 //   alert(book.name + book.author + book.price);
});

$('#code').click(function () {
    console.log('click code111');
    console.log($('#promocode').text());
    $('#inputPromo').show();
});

$('.submit').click(function () {
    console.log('promo text ' + $('#promocode').text());
    console.log('input ' + $('#inputCode').val());
    if($('#promocode').text() === $('#inputCode').val()){
        $('#buy').hide();
        $('#code').hide();
        $('#inputPromo').hide();
        $('#read').show();
        $('#dowl').show();
    }
    else{
        alert("Ви ввели неправильний промокод");
    }
});

exports.initialize = initialize;