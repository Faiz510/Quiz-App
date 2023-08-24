// // varibles
// const Que = document.querySelector(".que");
// const opts = document.querySelector(".opts");
// const DesTxt = document.querySelector(".des_text span");
// const skipBtn = document.querySelector(".btns .skip_btn");
// const opt = document.querySelectorAll(".opts opt");
// const timeArea = document.querySelector(".time");

// let curQuiz = 0;
// let getCurQuiz, getOpts;
// let timeInt = 10;

// export const displayFunction = function () {
//   getCurQuiz = quizs[curQuiz];
//   getOpts = quizs[curQuiz].opts;

//   // getting question in qu function
//   GettingQuesfunction();
//   // getting opt in opts function
//   GettingOptfunction(getOpts);
//   // getting target Quiz elemnt by click listner
//   gettingTargetQuiz();

//   //   display desc text function
//   desTxtFunction();
//   //   time interval function
//   //   timeIndFunction(timeInt);
// };

// // timeIndFunction(timeInt);
// // getting question in qu function
// const GettingQuesfunction = function () {
//   Que.innerHTML = getCurQuiz.question;
// };
// // getting opt in opts function
// const GettingOptfunction = function (opt) {
//   for (const key in opt) {
//     const option = opt[key];

//     const optTxt = `<p class="opt">${key} : <span>${opt[key]}</span> </p>`;

//     opts.insertAdjacentHTML("beforeend", optTxt);
//   }
// };

// // getting target Quiz elemnt by click listner
// const gettingTargetQuiz = function () {
//   opts.querySelectorAll(".opt").forEach((element) => {
//     // console.log(element);
//     element.addEventListener("click", function (e) {
//       document
//         .querySelectorAll(".opt")
//         .forEach((el) => el.classList.add("selectCl"));

//       const gotSpan = e.target.closest(".opt");
//       const getSpanTxt = gotSpan.querySelector("span").innerHTML;

//       gotSpan.classList.remove("selectCl");

//       //   checking ans funciton
//       checkingAnsFunction(getSpanTxt, gotSpan);
//     });
//   });
// };

// //   checking ans funciton
// const checkingAnsFunction = function (txt, spanTxt) {
//   getCurQuiz = quizs[curQuiz];
//   if (txt == getCurQuiz.ans) {
//     spanTxt.style.backgroundColor = "green";
//     spanTxt.style.color = "white";

//     // console.log();
//     alert("right");
//   } else {
//     spanTxt.style.backgroundColor = "red";
//     spanTxt.style.color = "white";
//     alert("wrong");
//   }
// };

// export const timeIndFunction = function () {
//   setInterval(() => {
//     timeInt--;
//     // console.log(timeInt);
//     timeArea.innerHTML = `timeInt : ${timeInt}s`;
//     curQuiz++;
//     if (timeInt < 0) {
//       //   opts.innerHTML = "";
//       displayFunction();
//       timeInt = 10;
//     }
//   }, 1000);
// };

// // const desTxtFunction = function () {
// //   DesTxt.innerHTML = `You are at ${curQuiz} / ${quizs.length}`;
// // };
