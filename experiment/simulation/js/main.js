// mainStep
const startBtn = document.querySelector("#nextToStep1");
const mainStep = document.querySelector("#mainStep");

// STEP 1 

const step1 = document.querySelector("#step1");

// images of step1
const png1Step1 = document.querySelector("#png1Step1");
const png2Step1 = document.querySelector("#png2Step1");

// gifs of step1
const gif1Step1 = document.querySelector("#gif1Step1");
const gif2Step1 = document.querySelector("#gif2Step1");
const gif3Step1 = document.querySelector("#gif3Step1");
const gif4Step1 = document.querySelector("#gif4Step1");
const gif5Step1 = document.querySelector("#gif5Step1");
const gif6Step1 = document.querySelector("#gif6Step1");

// arrows of step1
const arr1Step1 = document.querySelector("#arr1Step1");
const arr2Step1 = document.querySelector("#arr2Step1");
const arr3Step1 = document.querySelector("#arr3Step1");
const arr4Step1 = document.querySelector("#arr4Step1");

// transboxes of step1
const trans1Step1 = document.querySelector("#trans1Step1");
const trans2Step1 = document.querySelector("#trans2Step1");
const trans3Step1 = document.querySelector("#trans3Step1");
const trans4Step1 = document.querySelector("#trans4Step1");

// next to step2
const nextToStep2 = document.querySelector("#nextToStep2")
const arrNext = document.querySelector(".arr-next");


// STEP 2 


const step2 = document.querySelector("#step2");

// images of step2
const png1Step2 = document.querySelector("#png1Step2");
const png2Step2 = document.querySelector("#png2Step2");
const png3Step2 = document.querySelector("#png3Step2");
const png4Step2 = document.querySelector("#png4Step2");

// gifs of step2
const gif1Step2 = document.querySelector("#gif1Step2");
const gif2Step2 = document.querySelector("#gif2Step2");
const gif3Step2 = document.querySelector("#gif3Step2");
const gif4Step2 = document.querySelector("#gif4Step2");
const gif5Step2 = document.querySelector("#gif5Step2");
const gif6Step2 = document.querySelector("#gif6Step2");

// arrows of step2
const arr1Step2 = document.querySelector("#arr1Step2");
const arr2Step2 = document.querySelector("#arr2Step2");
const arr3Step2 = document.querySelector("#arr3Step2");
const arr4Step2 = document.querySelector("#arr4Step2");
const arr5Step2 = document.querySelector("#arr5Step2");
const arr6Step2 = document.querySelector("#arr6Step2");
const arr7Step2 = document.querySelector("#arr7Step2");

// transboxes of step2
const trans1Step2 = document.querySelector("#trans1Step2");
const trans2Step2 = document.querySelector("#trans2Step2");
const trans3Step2 = document.querySelector("#trans3Step2");
const trans4Step2 = document.querySelector("#trans4Step2");
const trans5Step2 = document.querySelector("#trans5Step2");
const trans6Step2 = document.querySelector("#trans6Step2");

// buttons of step 2
const assemBtnStep2 = document.querySelector("#assembleStep2");
const nextToStep3 = document.querySelector("#nextToStep3");


// STEP 3

const step3 = document.querySelector("#step3");

// images of step3
const png1Step3 = document.querySelector("#png1Step3");

// gifs of step3
const gif1Step3 = document.querySelector("#gif1Step3");
const gif2Step3 = document.querySelector("#gif2Step3");
const gif3Step3 = document.querySelector("#gif3Step3");
const gif4Step3 = document.querySelector("#gif4Step3");
const gif5Step3 = document.querySelector("#gif5Step3");
const gif6Step3 = document.querySelector("#gif6Step3");

// arrows of step3
const arr1Step3 = document.querySelector("#arr1Step3");
const arr2Step3 = document.querySelector("#arr2Step3");
const arr3Step3 = document.querySelector("#arr3Step3");
const arr4Step3 = document.querySelector("#arr4Step3");
const arr5Step3 = document.querySelector("#arr5Step3");


// transboxes of step3
const trans1Step3 = document.querySelector("#trans1Step3");
const trans2Step3 = document.querySelector("#trans2Step3");
const trans3Step3 = document.querySelector("#trans3Step3");
const trans4Step3 = document.querySelector("#trans4Step3");
const trans5Step3 = document.querySelector("#trans5Step3");

// next to step4
const nextToStep4 = document.querySelector("#nextToStep4");


//#########################################################################

addEventListener("DOMContentLoaded", (evt) => {
    // startBtn.style.visibility = "visible";
});

// step1 

startBtn.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    mainStep.style.visibility = "hidden";

    step1.style.visibility = "visible";
    png1Step1.style.visibility = "visible";
    arr1Step1.style.visibility = "visible";
    trans1Step1.style.visibility = "visible";
});

trans1Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step1.style.visibility = "hidden";
    png1Step1.style.visibility = "hidden";

    gif1Step1.style.visibility = "visible";

    setTimeout(()=>{
        arr2Step1.style.visibility = "visible";
        trans2Step1.style.visibility = "visible";
    }, 2000);
});

trans2Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr2Step1.style.visibility = "hidden";
    gif1Step1.style.visibility = "hidden";

    gif2Step1.style.visibility = "visible";
    
    setTimeout(()=>{
        gif2Step1.style.visibility = "hidden";

        arr3Step1.style.visibility = "visible";
        trans3Step1.style.visibility = "visible";
        png2Step1.style.visibility = "visible";
    }, 2000);
});

trans3Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr3Step1.style.visibility = "hidden";
    png2Step1.style.visibility = "hidden";

    gif3Step1.style.visibility = "visible";

    setTimeout(()=>{
        nextToStep2.style.visibility = "visible";
        arrNext.style.visibility = "visible";
    }, 2000);
});


// step2 

nextToStep2.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arrNext.style.visibility = "hidden";
    gif3Step1.style.visibility = "hidden";
    step1.style.visibility = "hidden";

    step2.style.visibility = "visible";
    png1Step2.style.visibility = "visible";
    assemBtnStep2.style.visibility = "visible";
    arr1Step2.style.visibility = "visible";
});

assemBtnStep2.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step2.style.visibility = "hidden";
    png1Step2.style.visibility = "hidden";

    gif1Step2.style.visibility = "visible";

    setTimeout(() => {
        gif1Step2.style.visibility = "hidden";
        png2Step2.style.visibility = "visible";
        arr2Step2.style.visibility = "visible";
        trans1Step2.style.visibility = "visible";
    }, 13000);
});

trans1Step2.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr2Step2.style.visibility = "hidden";
    png2Step2.style.visibility = "hidden";

    gif2Step2.style.visibility = "visible";

    setTimeout(()=>{
        gif2Step2.style.visibility = "hidden";
        png3Step2.style.visibility = "visible";
        arr3Step2.style.visibility = "visible";
        trans2Step2.style.visibility = "visible";
    }, 9000);
});

trans2Step2.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr3Step2.style.visibility = "hidden";
    png3Step2.style.visibility = "hidden";

    gif3Step2.style.visibility = "visible";

    setTimeout(() => {
        arr4Step2.style.visibility = "visible";
        trans3Step2.style.visibility = "visible";
    }, 2000);
});

trans3Step2.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr4Step2.style.visibility = "hidden";
    gif3Step2.style.visibility = "hidden";

    gif4Step2.style.visibility = "visible";

    setTimeout(() => {
        arr5Step2.style.visibility = "visible";
        trans4Step2.style.visibility = "visible";
    }, 5000);
});

trans4Step2.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr5Step2.style.visibility = "hidden";
    gif4Step2.style.visibility = "hidden";

    gif5Step2.style.visibility = "visible";

    setTimeout(() => {
        arr6Step2.style.visibility = "visible";
        trans5Step2.style.visibility = "visible";
    }, 10000);
});

trans5Step2.addEventListener("click", (evt) =>{
    evt.target.style.visibility = "hidden";
    arr6Step2.style.visibility = "hidden";
    gif5Step2.style.visibility = "hidden";

    gif6Step2.style.visibility = "visible";

    setTimeout(()=>{
        arr7Step2.style.visibility = "visible";
        trans6Step2.style.visibility = "visible";
    }, 5000);
});

trans6Step2.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr7Step2.style.visibility = "hidden";
    gif6Step2.style.visibility = "hidden"

    png4Step2.style.visibility = "visible";

    setTimeout(() => {
        nextToStep3.style.visibility = "visible";
        arrNext.style.visibility = "visible";
    }, 2000);
});


// step 3

nextToStep3.addEventListener("click", (evt) =>{
    evt.target.style.visibility = "hidden";
    arrNext.style.visibility = "hidden";
    step2.style.visibility = "hidden";

    step3.style.visibility = "visible";
    png1Step3.style.visibility = "visible";
    arr1Step3.style.visibility = "visible";
    trans1Step3.style.visibility = "visible";
});