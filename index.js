"use strict";
// varibles
const Que = document.querySelector(".que");
const opts = document.querySelector(".opts");
const DesTxt = document.querySelector(".des_text span");
const skipBtn = document.querySelector(".btns .skip_btn");
const opt = document.querySelectorAll(".opts opt");
const timeArea = document.querySelector(".time");
const ScoreCon = document.querySelector(".Score_con");
const mainCon = document.querySelector(".main_con");
const score = document.querySelector(".score_board span");
const PlayAgain = document.querySelector(".again_btn");
/////////////////////////

let curQuiz = 0;
let getCurQuiz, getQuizOpts;
let point = 0;
let timeInt = 10;

const displayQuizFunction = function (num) {
  // display question
  gettingQue(num);
  // getting options form quiz
  gettingOpt(num);

  gettingTargetQuiz(num);

  desTxtFunction(num);

  optClickedFunction();
};

// display question
const gettingQue = (no) => {
  // getting question from Data
  const quizQue = quizs[no].question;
  // displaying Question
  Que.innerHTML = quizQue;
};

// getting options form quiz
const gettingOpt = (no) => {
  // getting opts
  getQuizOpts = quizs[no].opts;
  // displaying opts
  for (const key in getQuizOpts) {
    const optTxt = `<p class="opt">${key} : <span>${getQuizOpts[key]}</span> </p>`;
    opts.insertAdjacentHTML("beforeend", optTxt);
  }

  //   console.log(getQuizOpts);
};

// getting target Quiz elemnt by click listner
const gettingTargetQuiz = function (no) {
  let clickedOption = false;
  opts.querySelectorAll(".opt").forEach((element) => {
    element.addEventListener("click", function (e) {
      // romve select class form to add only clicked one

      document
        .querySelectorAll(".opt")
        .forEach((el) => el.classList.add("selectCl"));

      const gotSpan = e.target.closest(".opt");
      const getSpanTxt = gotSpan.querySelector("span").innerHTML;

      //   checking ans funciton
      const CorrAns = quizs[no].ans;

      if (getSpanTxt == CorrAns) {
        ansCheckingColors("green", gotSpan);
        point++;
        // console.log(point);
        displayScore(point);
      } else {
        ansCheckingColors("red", gotSpan);
      }
      // add select class on clicked element
      gotSpan.classList.remove("selectCl");
    });
  });
};

const ansCheckingColors = (color, area) => {
  area.style.backgroundColor = `${color}`;
  area.style.color = "white";
};

// desc text function
const desTxtFunction = (no) =>
  (DesTxt.innerHTML = `You are at ${no + 1} / ${quizs.length}`);

// skip btn logic
skipBtn.addEventListener("click", () => {
  curQuiz++;
  opts.innerHTML = "";

  checkingLastQuizFunction(curQuiz);
  displayQuizFunction(curQuiz);
});

const checkingLastQuizFunction = (no) => {
  if (no >= quizs.length - 1) {
    no = 0;
    // if(quizs.length)
    ScoreCon.classList.remove("hideScore");
    mainCon.style.display = "none";
  }
};

const displayScore = (s) => {
  score.innerHTML = `You Score ${s} / ${quizs.length}`;
};

// opts clicked function work when clicked on opts

const optClickedFunction = () => {
  let clickedOption = false;
  document.querySelectorAll(".opt").forEach((el) =>
    el.addEventListener("click", (e) => {
      if (!clickedOption) {
        clickedOption = true;
        if (e.target) {
          setTimeout(() => {
            // console.log("got clicked function");
            curQuiz++;
            opts.innerHTML = "";
            checkingLastQuizFunction(curQuiz);
            displayQuizFunction(curQuiz);
          }, 1000);
          // clearInterval();
        }
      }
    })
  );
};

// if swifted to another tab then show option
const switchToTab = () => {
  const switchHandle = () => {
    if (document.hidden) {
      ScoreCon.classList.remove("hideScore");
      mainCon.style.display = "none";
      score.textContent = `your Score is 0 because you switch to the other tab`;
    }
  };

  document.addEventListener("visibilitychange", switchHandle);
};

// play Again function
const playAgainFunction = () => {
  curQuiz = 0;
  point = 0;

  // Clear the previous options and hide the score
  opts.innerHTML = "";
  mainCon.style.display = "block";

  displayQuizFunction(curQuiz);

  ScoreCon.classList.add("hideScore");
};

//////////////////////
PlayAgain.addEventListener("click", playAgainFunction);

switchToTab();

//////////////////////
// calling question

displayQuizFunction(curQuiz);
