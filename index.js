const audio = document.querySelector("audio");
const overlay = document.querySelector(".overlay");

function play() {
  document.body.classList.remove("not-loaded");
  overlay.classList.add("over-off");
  audio.play();
  audio.volume = 0.035;
  setTimeout(() => {
    overlay.style.display = "none";
  }, 1000);
}