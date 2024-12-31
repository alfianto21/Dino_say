document.getElementById("playButton").addEventListener("click", function () {
  const audio = document.getElementById("backgroundMusic");
  audio.play();
  this.style.display = "none"; // Hilangkan tombol setelah diklik
});
