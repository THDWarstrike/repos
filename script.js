function AudioPlay(name = new String()) {
            audioObj = new Audio(name);
            audioObj.id = "playingAudio";
            $audiobtn = document.getElementById("audiobtn");
            audioObj.addEventListener("canplaythrough", function(event) {
              /* the audio is now playable; play it if permissions allow */
              this.play();
            });
            $audiobtn.onclick = function() {};
 
}
// let answer = click
// switch (answer) {
//     case 0:
//         answer = 1
//         text = "Wrong"
//         break;
//     case 1:
//         answer = 2
//         text = "Correct"
//         break;
//     case 2:
//         answer =3
//         text = "Wrong"
//         break;
//     case 3:
//         answer = 4
//         text = "Wrong"
//         break;
//     default:
//         break;
// }
// function playAudio(filename) {

//     var audio = document.createElement("audio");
//     audio.preload = "auto";

//     var src = document.createElement("source");
//     src.src = filename + ".mp3";
//     audio.appendChild(src);

//     audio.load();
//     audio.currentTime = 0.01;
//     audio.volume = 1;

//     //Due to a bug in Firefox, the audio needs to be played after a delay
//     setTimeout(function () {
//         soundFile.play();
//     }, 1);
// }
// var name = function (code) {
//     if ('Hi.') {
//         playAudio("correct.mp3");
//     } else 
//         playAudio("incorrect.mp3");
// }
