/* Exercise 1: Wish list */

$(document).ready(function(){



    $(document).on('click', "#add-to-list", function() {

        var item = $('#item').val();

        addToList(item);

//        alert("hi");
//        alert($('#item').val());
    });

    $(document).on('click', 'ol#items li', function(){

        alert('list item clicked');


    })

});

function addToList(item) {

    var newElem = "<li>" + item +
        "<span class='label pending'>Pending</span>" +
        "</li>";

//    newElem += ;

    $("ol#items").append(newElem);

    $('#item').val("");

    $('#item').focus();
}

