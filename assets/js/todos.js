
/*check off specific todos when clicked, also, the click 
listener is on ul instead of the li because ul is the parent 
that exists loading of the webpage, and new li don't exist at the start */
//add click listener to something that encompasses and exists at the beggining
//.on() works for future elements
$("ul").on("click", "li", function(){
  //with jQuery
    $(this).toggleClass("done");

  //without jQuery
    /*//if li is gray
    if($(this).css("color") === "rgb(128, 128, 128)"){
        //turn it black
        $(this).css({
            color: "black",
            "text-decoration": "none"  
        });
    }
    //else
    else{
        //turn it gray   
        $(this).css({
            color: "gray",
            "text-decoration": "line-through"
        });
    }
    */
});

//click on X to delete todo. The click on a span is an event
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        //$(this) here refers to $(this).parent()
        $(this).remove();
    });
    event.stopPropagation();
});
                        //each time a key is pressed is an event
$("input[type='text']").keypress(function(event){
    //if the key pressed has a code of 13 which is enter then...
    if(event.which === 13){
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
    }


});

$("#plus").click(function(){

    $("input[type='text']").fadeToggle();

});