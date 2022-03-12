//When the header is hovered over with the mouse, the font color should change and 
//when the mouse stops hovering, it returns to the original color.
$(document).ready(function(){
    $(".header").hover(function(){
        $(this).css("background-color","white");
    }, function(){
        $(this).css("background-color","orange");
    });
});

//When the paragraph element is clicked on, it should populate the following
// paragraph: "jQuery is a fast, JavaScript library that makes many tasks easier 
//and simpler to accomplish. //Hint! You will be using a new jQuery method: .text()

$(document).ready(function(){
    $("p").click(function(){
        $(this).text("jQuery is a fast, JavaScript library that makes many tasks easier and simpler to accomplish, A JavaScript library contains pre-written JavaScript, which makes developing applications a bit easier for the developer. This means jQuery is not a language, but an extension of JavaScript. It takes many lines of JavaScript code, which we would have had to write ourselves before jQuery, and compresses it.");
    });
 });

//When a list element is double clicked on, it should be hidden from view

$(document).ready(function(){
    $(".list").dblclick(function(){
        $(this).hide();
    });
});

//When typing in an input, on keydown, toggle the following class:
//.input{
// color: red;}

$(document).ready(function(){
    $("input").keydown(function(){
        $(this).toggleClass("input");
    });
    });

  