
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var level = 0;

function nextSequence(){

    userClickedPattern = [];

    level = level +1;
    var t = "Level "+level;
    $("h1").text(t);
    var n = Math.floor(Math.random()*4);
    gamePattern.push(buttonColours[n]);
    playAudio(buttonColours[n]);
    animate(buttonColours[n]);

}

$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
  
    userClickedPattern.push(userChosenColour);
  
  
  });


function playAudio(n){
    var sound = new Audio("sounds/"+n+".mp3");
    sound.play();
    
}


function animate(n){
    var Id = "#"+n;
    $(Id).fadeOut(100).fadeIn(100);
}


$(".btn").click(function(){
    var Id = $(this).attr("id");
    animate(Id);
    playAudio(Id);
    
    var num = userClickedPattern.length - 1;
    checkAnswer(num); 
})


var userClickedPattern = [];



var flag = false;

$(document).keypress(function(){
    if(!flag){
        nextSequence();
        flag = true;
    }
})

function startOver(){
    $("h1").text("Press A Key to Start");
    userClickedPattern = [];
    gamePattern = [];
    flag = false;
    level = 0;
}

function checkAnswer(n){
    
        if(userClickedPattern[n] === gamePattern[n]){
        console.log("Success");
        
        console.log(userClickedPattern);
        console.log(gamePattern);

        console.log(userClickedPattern.length);
        console.log(gamePattern.length);
        
        

        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function () { nextSequence();}, 1000);
        }
        }
        
        else{
            console.log("wrong");
            playAudio("wrong");
            $("h1").text("Game Over, Press Any Key to Restart. " + "Your Score is " + level);
            $("body").css("background-color","red");

            setTimeout(function () {  $("body").css("background-color","#011F3F");}, 200);

        

            setTimeout(function () { startOver();}, 3000);
            

        
            
        }
    }