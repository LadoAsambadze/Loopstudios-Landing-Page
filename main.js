const button = document.querySelector(".img-press");
const index2 = document.querySelector(".index2");
const closeWindow = document.querySelector(".img-press1");

button.addEventListener("click", function () {
  index2.classList.remove("hidden");
});

closeWindow.addEventListener("click", function () {
  index2.classList.add("hidden");
});
