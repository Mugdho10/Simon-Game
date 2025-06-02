var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var UserClickedPattern = [];

$(".btn").click(function() {
        var userChosenColor = $(this).attr("id");
        console.log("User clicked: " + userChosenColor);
        UserClickedPattern.push(userChosenColor);
        console.log("User's pattern: " + UserClickedPattern.join(", "));        
    });

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    
    gamePattern.push(randomChosenColor);
    
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    
    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();



    console.log("New sequence: " + gamePattern.join(", "))
}







