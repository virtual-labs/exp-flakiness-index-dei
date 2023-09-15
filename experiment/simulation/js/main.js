// mainStep
const startBtn = document.querySelector("#next-0");
const mainStep = document.querySelector("#mainStep");

// STEP 1 
const step1 = document.querySelector("#step1"); 
// images of step1
const png1Step1 = document.querySelector("#png1Step1");
// gifs of step1

// arrows of step1
const arr1Step1 = document.querySelector("#arr1Step1");

// trans of step1
const trans1Step1 = document.querySelector("#trans1Step1");

addEventListener("DOMContentLoaded", (evt) => {
    startBtn.style.visibility = "visible";
});

startBtn.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    mainStep.style.visibility = "hidden";

    step1.style.visibility = "visible";
    png1Step1.style.visibility = "visible";
    arr1Step1.style.visibility = "visible";
    trans1Step1.style.visibility = "visible";
});