
$(document).ready(function () {
    $(".submit").click(function (event) {
        event.preventDefault();

        var theInput = parseInt($("input#enter").val());

        for (var i = 0; i <= theInput; i++) {
            if (i.toString().includes("3")) {
                $(".output").append("<li>sorry dude</li>")
            }
            else if (i.toString().includes("2")) {
                $(".output").append("<li>boop</li>")
            }
            else if (i.toString().includes("1")) {
                $(".output").append("<li>beep</li>")
            }
            else {
                $(".output").append("<li>" + i + "</li>")
            }
        };

    });
    $(".reset").click(function (event) {
        $(".output").text("");

    });


});
