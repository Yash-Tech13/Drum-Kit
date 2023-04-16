// Detecting button press
var rem = document.querySelectorAll(".drum");
for(let i=0; i < rem.length; i++) {
    rem[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

// Detecting keyboard press
document.addEventListener('keydown', function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

// Function to play sound according to the key pressed
function makeSound(key) {
    switch(key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            console.log(key);    
    }
}

// Animation of buttons
function buttonAnimation(key) {
    var activeButton = document.querySelector("."+key);

    activeButton.classList.add("pressed");

    setTimeout(function() {activeButton.classList.remove("pressed");}, 100);
    
}