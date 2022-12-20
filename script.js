//Please put your answer here
$( () => {
    $("#close-modal").click(function() {
        $("#signup-modal").fadeOut()
    });

    $(".signup-show").click(function() {
        $("#signup-modal").fadeIn()
    });
})