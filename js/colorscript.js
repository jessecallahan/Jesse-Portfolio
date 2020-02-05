$(document).ready(function () {
    $("button").click(function () {
        var favoriteColor = $("#color").val();
        console.log(typeof true)
        document.body.style.setProperty('--main-color', favoriteColor)
        // $("body").addClass("intro");
    });
});
