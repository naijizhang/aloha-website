$(function(){
    $("button").on("click", function(){
        let text= $('input[class="text"]').val();
       
        if(text===""){
            alert("Please enter email address.");
        } else{
            alert("Thanks for subscribing.");
        }
    });

});