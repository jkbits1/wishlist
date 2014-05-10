/* Exercise 1: Wish list */

$(document).ready(function(){

    $(document).on('click', "#add-to-list", function() {

        var item = $('#item').val();

        addToList(item);
    });

    $(document).on('click', 'span.label.pending', function(){

        var parent = $(this).parent();

        parent.addClass("complete");

        parent.append("<span class='label success'>Done!</span>");

        $(this).remove();

        updateTotal();
});

//    $(document).on('click', "h1", updateTotal);

});

function addToList(item) {

    var span = "<span class='label pending'>Pending</span>";

    var newElem = "<li>" + item + span + "</li>";

    $("ol#items").append(newElem);

    $('#item').val("");

    $('#item').focus();

    updateTotal();
}

function updateTotal() {
    var pendingCount = $("span.pending").length;

    var doneCount = $("span.success").length;

    var message = "Pending: " + pendingCount + " Completed: " + doneCount;

    $(".total").text(message);
}

