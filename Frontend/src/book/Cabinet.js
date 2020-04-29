
$(".cab-settings").click(function(){
    // alert("Settings were clicked");
    $(".change-pic").css("display","block");
});

$(".cab-save").click(function(){
    // alert("Save were clicked");
    $(".change-pic").css("display","none");
});


$(".file-upload").on('change', function () {
    readURL(this);
});
var readURL = function(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('.avatar').attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
};

function initialize() {


    // $(".settings").click(function(){
    //     alert("Settings were clicked");
    //     $(".change-pic").css("display","block");
    // });
};

exports.initialize = initialize;