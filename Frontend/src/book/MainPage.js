function initialize() {
    function on() {
        $("#overlay").css('display', 'block');
        alert("Sign-in function");
        $(".sign-in").addClass(".d-none");
        $(".sign-out").removeClass(".d-none");
    }

    function off() {
        alert("off function");
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

};


exports.initialize = initialize;