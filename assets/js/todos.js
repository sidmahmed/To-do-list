// Check off to-dos by clicking
$('ul').on('click', 'li', function() {

    $(this).toggleClass('completed');
});

//Click on X to delete to do
$('ul').on('click', 'span', function(event) {
    
    //Fade out item and then remove
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });

    //Stop from bubbling to parent elements
    event.stopPropagation();
});

//Adding new to dos to the list

//Add a click listener to the input
$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
        //getting new todo text from input
        var text = $(this).val();
        $(this).val("");
        //create a new list item
        var ul = $('ul')
        ul.append("<li>" + "<span><i class='far fa-trash-alt'></i> </span>" + text + "</li>");        
    } 
});

//Add a click listener to plus button
$('.fa-plus-square').on('click', function(){
    $("input[type='text']").fadeToggle(500);
})

