$(document).ready(function () {
    $("form#enter").submit(function (event) {
        event.preventDefault();


        var input = $("input#wordplay").val();
        var array = input.split(" ");
        var pushedArray = [];

        for (var i = 0; i < array.length; i++) {
            if (array[i].length >= 3) {
                pushedArray.push(array[i]);
            }
        }
        var newArray = pushedArray.reverse();
        var finalArray = newArray.join(" ");

        console.log(pushedArray);
        $("#output").append(finalArray);
    });
});
