/* Exercise 1: Wish list */

$(document).ready(function(){



    $(document).on('click', "#add-to-list", function() {

        var item = $('#item').val();

        addToList(item);

//        alert("hi");
//        alert($('#item').val());
    });

});

function addToList(item) {

    var newElem = "<li>" + item + "</li>";

    $("ol#items").append(newElem);

}

