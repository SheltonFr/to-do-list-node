const closeMsg = document.querySelector("#close-message");
const message = document.querySelector(".message");

closeMsg.addEventListener("click", () => {
  message.style.display = "none";
});

setTimeout(() => {
  message.style.display = "none";
}, 4000);
