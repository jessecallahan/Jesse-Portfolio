$(document).ready(function () {
    $(".submit").click(function (event) {

        event.preventDefault();


        var theInput = parseInt($("input#enter").val());

        for (var i = 1; i <= theInput; i++) {
            console.log(i)
            // $(".output").append(i);
            //
            //
            //



            if (i % 15 === 0) {
                $(".output").append("<li>ORANGE</li>");
            } else if (i % 5 === 0) {
                $(".output").append("<li>pong</li>");
            } else if (i % 3 === 0) {
                $(".output").append("<li>ping</li>")
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
