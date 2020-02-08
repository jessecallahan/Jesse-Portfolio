

$(document).ready(function () {
    $("form#in").submit(function (event) {
        event.preventDefault();

        $('input[type="radio"]').on('mouseup', function () {
            if (this.dataset.check) {
                var radio = this;
                setTimeout(function () { radio.checked = false; }, 20);
                delete this.dataset.check;
            }
        }).on('mousedown', function () {
            if (this.checked) {
                this.dataset.check = '1';
            }



            var secondString = $("input:radio[name=secondstring]:checked").val();

            var firstString = $("input:radio[name=firststring]:checked").val();

            if (firstString === "a1") {
                $(".output").text("F");
            }
            else if (firstString === "b1") {
                $(".output").text("F#");
            }
            else if (firstString === "c1") {
                $(".output").text("G");
            }
            else if (firstString === "d1") {
                $(".output").text("G#");
            }

            if (secondString === "a2") {
                $(".output").text("Bb");
            }
            else if (secondString === "b2") {
                $(".output").text("B");
            }
            else if (secondString === "c2") {
                $(".output").text("C");
            }
            else if (secondString === "d2") {
                $(".output").text("C#");
            }


            // $(".output").append(secondString);
            // $(".output").append(firstString);


        });

    });


});