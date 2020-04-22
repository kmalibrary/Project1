$(".sign-in").click(function() {
// function onSignIn() {
    $("#overlay").css('display', 'block');
    alert("Sign-in function");
    $(".sign-in").addClass(".d-none");
    $(".sign-out").removeClass(".d-none");
});
$(".sign-out").click(function() {
    alert("Sign-out function");
    $("#overlay").css('display', 'block');
    $(".sign-in").addClass(".d-none");
    $(".sign-out").removeClass(".d-none");
});

function off() {
    $("#overlay").css('display', 'none');
}

$("#signup").click(function() {
    $("#first").fadeOut("fast", function() {
        $("#second").fadeIn("fast");
    });
});

$("#signin").click(function() {
    $("#second").fadeOut("fast", function() {
        $("#first").fadeIn("fast");
    });
});

var  initialise = function() {
    //Фукнція віпрацьвуватиме при завантаженні сторінки
    //Тут можна наприклад, зчитати вміст корзини який збережено в Local Storage то показати його
    // var prevCart = Storage.read("cart");
    // if (prevCart) {
    //     Cart = prevCart;
    // }
};
//init
// var validate = function() {
//     $("form[name='login']").validate({
//         rules: {
//
//             email: {
//                 required: true,
//                 email: true
//             },
//             password: {
//                 required: true,
//
//             }
//         },
//         messages: {
//             email: "Please enter a valid email address",
//
//             password: {
//                 required: "Please enter password",
//
//             }
//
//         },
//         submitHandler: function(form) {
//             form.submit();
//         }
//     });
// };



function register() {

    $("form[name='registration']").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            }
        },

        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            email: "Please enter a valid email address"
        },

        submitHandler: function(form) {
            form.submit();
        }
    });
}

var initialize = function(){
    // validate();
    register();
};

exports.initialize = initialize();