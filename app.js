let a2 = ["🍎", "🍊", "🍋", "🍉", "🍇", "🍓", "🍒", "🥝"];
let b2 = ["😀", "😂", "😍", "🤔", "🤗", "😎", "😢", "😡"];
let c2 = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼"];
let d2 = ["🌍", "🌕", "🪐", "🌑", "🌟", "☄️", "🌔", "🌓"];
let e2 = ["IN", "US", "AUS", "FR", "RUS", "JAP", "CAN", "UA"];

let f2 = [];
let g2 = 0;
let h2;
let i2, j2;
let k2 = false;
let l2 = false;

document.getElementById("fruits").addEventListener("click", () => b1(a2));
document.getElementById("emojis").addEventListener("click", () => b1(b2));
document.getElementById("animals").addEventListener("click", () => b1(c2));
document.getElementById("planets").addEventListener("click", () => b1(d2));
document.getElementById("flags").addEventListener("click", () => b1(e2));

function b1(a3) {
  f2 = [...a3, ...a3];
  f2.sort(() => 0.5 - Math.random());
  document.querySelector(".a1").style.display = "none";
  document.querySelector(".f1").style.display = "flex";
  document.getElementById("m1").innerHTML = f2
    .map((a4, b3) => `<div class="n1" data-item="${a4}"></div>`)
    .join("");
  g2 = 0;
  document.getElementById("i1").innerText = g2;
  e3(30);
  document
    .querySelectorAll(".n1")
    .forEach((card) => card.addEventListener("click", () => c1(card)));
}

function c1(a5) {
  if (l2 || a5 === i2) return;
  a5.classList.add("o1");
  a5.innerHTML = a5.dataset.item;

  if (!k2) {
    k2 = true;
    i2 = a5;
    return;
  }

  j2 = a5;
  l2 = true;
  d1();
}

function d1() {
  if (i2.dataset.item === j2.dataset.item) {
    e1();
    g2++;
    document.getElementById("i1").innerText = g2;
  } else {
    f1();
  }
}

function e1() {
  i2.classList.add("p1");
  j2.classList.add("p1");
  g1();
}

function f1() {
  setTimeout(() => {
    i2.classList.remove("o1");
    j2.classList.remove("o1");
    i2.innerHTML = "";
    j2.innerHTML = "";
    g1();
  }, 1000);
}

function g1() {
  [k2, l2] = [false, false];
  [i2, j2] = [null, null];
}

function e3(a6) {
  let a7 = a6;
  document.getElementById("k1").innerText = a7;
  h2 = setInterval(() => {
    a7--;
    document.getElementById("k1").innerText = a7;
    if (a7 <= 0) {
      clearInterval(h2);
      h1();
    }
  }, 1000);
}

function h1() {
  alert(`Game Over! You Lost, Your score is ${g2}`);
  document.querySelector(".f1").style.display = "none";
  document.querySelector(".a1").style.display = "flex";
}
