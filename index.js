onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
        playAudio();
    }, 2000);
};

const audio = document.querySelector("audio");
const button = document.querySelector("#custom-button");
const volume_1 = document.querySelector(".unmute");
const volume_2 = document.querySelector(".mute");

function playAudio() {
  
  audio.play();
  audio.volume = 0.035;
}