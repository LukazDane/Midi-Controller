window.addEventListener("load", function() {
  window.addEventListener("keydown", function(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing"); // adds highlight to show which button pressed
  });
  function removeTransition(event) {
    if (event.propertyName !== "transform") return;
    this.classList.remove("playing");
  }

  const keys = document.querySelectorAll(".key");
  keys.forEach(key => key.addEventListener("transitionend", removeTransition));
});
// stops all sound except for metronome
document.getElementById("stopButton").onclick = function() {
  var sounds = document.getElementsByTagName("audio");
  for (i = 0; i < sounds.length; i++) sounds[i].pause();
};
