const yes = document.querySelector(".yes");
const no = document.querySelector(".no");
const ok = document.querySelector(".ok");
const text = document.querySelector(".text");

yes.addEventListener("click", function () {
  text.classList.toggle("active");
  text.innerHTML = "okay give me your money💸";
});
no.addEventListener("click", function () {
  text.classList.toggle("active");
  text.innerHTML = "Fuck you bitch !";
});

no.addEventListener("mouseover", function () {
  function getRandom() {
    return Math.floor(Math.random() * 301);
  }
  no.style.left = getRandom() + "px";
  no.style.top = getRandom() + "px";
});
