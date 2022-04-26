// const acc = document.querySelector(".tag-label");
// // const caa = document.querySelector(".tag-container-answer");

// // console.log(accordion);

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", result);

//   //   console.log(acc[i]);
// }
// function result() {
//   acc.classList.toggle("active");

//   //   caa.classList.toggle("active");
// }

//Target the div label
//at the onclick of the label, sub div should be displayed block
const darkMode = document.querySelector(".dark_mode");
const body = document.querySelector(".bdy");
const questions = document.getElementsByClassName("question");
darkMode.addEventListener("click", (handleMode) => {
  body.classList.add("dark");

  for (const el of questions) {
    el.classList.add("dark");
  }
});
function toggle(id) {
  let answer = document.getElementById(id);

  if (answer.style.visibility == "hidden") {
    answer.style.visibility = "visible";
  } else {
    answer.style.visibility = "hidden";
  }
}
