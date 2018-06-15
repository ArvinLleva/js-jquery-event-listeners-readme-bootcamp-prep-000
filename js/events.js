//define functions here

function getIt(){
<<<<<<< HEAD
  $('p').on("click", function(){ // this binds a click event on p
    alert("Hey!"); // if the paragraph is click it alerts saying hey
=======
  $('p').on("click", function(){
    alert("Hey!");
>>>>>>> 149a3b6f7ad509864fa33fbf7c4828d9b1929d5d
  });
}

function frameIt(){
<<<<<<< HEAD
  $('img').on('load', function(){ // binds a load event to img and adds the tasty class
    $('img').addClass("tasty");
=======
  $('.img').on('load', function(){
    $('img').addclass("tasty")
>>>>>>> 149a3b6f7ad509864fa33fbf7c4828d9b1929d5d
  });
}

function pressIt(){
<<<<<<< HEAD
  $(document).on('keydown', function(key){ // if g is pressed which the ascii key value is 71, it will alert you stating that you pressed G
=======
  $(document).on('keydown', function(key){
>>>>>>> 149a3b6f7ad509864fa33fbf7c4828d9b1929d5d
    if (key.which === 71){
      alert("You have pressed G")
    }
  });
}

function submitIt(){
<<<<<<< HEAD
  $("form").on("submit", function(){ // this sets up a submit event 
=======
  $("form").on("submit", function(){
>>>>>>> 149a3b6f7ad509864fa33fbf7c4828d9b1929d5d
    alert("Your form is going to be submitted now.");
    return;
  })
}

$(document).ready(function(){

// call functions here

});
