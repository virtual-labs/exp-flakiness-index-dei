// STEP 3

const step3 = document.querySelector("#step3");
const instructionsStep3 = document.querySelector("#instructionsStep3");

// images of step3
const png1Step3 = document.querySelector("#png1Step3");
const png2Step3 = document.querySelector("#png2Step3");

// gifs of step3
const gif1Step3 = document.querySelector("#gif1Step3");
const gif2Step3 = document.querySelector("#gif2Step3");
const gif3Step3 = document.querySelector("#gif3Step3");
const gif4Step3 = document.querySelector("#gif4Step3");
const gif5Step3 = document.querySelector("#gif5Step3");
const gif6Step3 = document.querySelector("#gif6Step3");
const gif7Step3 = document.querySelector("#gif7Step3");
const gif8Step3 = document.querySelector("#gif8Step3");
const gif9Step3 = document.querySelector("#gif9Step3");
const gif10Step3 = document.querySelector("#gif10Step3");
const gif11Step3 = document.querySelector("#gif11Step3");
const gif12Step3 = document.querySelector("#gif12Step3");
const gif13Step3 = document.querySelector("#gif13Step3");
const gif14Step3 = document.querySelector("#gif14Step3");


// arrows of step3
const arrNext = document.querySelector(".arr-next");
const arr1Step3 = document.querySelector("#arr1Step3");
const arr2Step3 = document.querySelector("#arr2Step3");
const arr3Step3 = document.querySelector("#arr3Step3");
const arr4Step3 = document.querySelector("#arr4Step3");
const arr5Step3 = document.querySelector("#arr5Step3");
const arr6Step3 = document.querySelector("#arr6Step3");
const arr7Step3 = document.querySelector("#arr7Step3");
const arr8Step3 = document.querySelector("#arr8Step3");
const arr9Step3 = document.querySelector("#arr9Step3");
const arr10Step3 = document.querySelector("#arr10Step3");
const arr11Step3 = document.querySelector("#arr11Step3");
const arr12Step3 = document.querySelector("#arr12Step3");
const arr13Step3 = document.querySelector("#arr13Step3");
const arr14Step3 = document.querySelector("#arr14Step3");

// transboxes of step3
const trans1Step3 = document.querySelector("#trans1Step3");
const trans2Step3 = document.querySelector("#trans2Step3");
const trans3Step3 = document.querySelector("#trans3Step3");
const trans4Step3 = document.querySelector("#trans4Step3");
const trans5Step3 = document.querySelector("#trans5Step3");
const trans6Step3 = document.querySelector("#trans6Step3");
const trans7Step3 = document.querySelector("#trans7Step3");
const trans8Step3 = document.querySelector("#trans8Step3");
const trans9Step3 = document.querySelector("#trans9Step3");
const trans10Step3 = document.querySelector("#trans10Step3");
const trans11Step3 = document.querySelector("#trans11Step3");
const trans12Step3 = document.querySelector("#trans12Step3");
const trans13Step3 = document.querySelector("#trans13Step3");
const trans14Step3 = document.querySelector("#trans14Step3");


// next to step3
const nextToStep4 = document.querySelector("#nextToStep4");

addEventListener("DOMContentLoaded", (evt) => {
    step3.style.visibility = "visible";
    instructionsStep3.textContent = "Pass the aggregates that have retained on 20mm sieve one by one through the 25-20mm slot in flakiness gauge. Separate the  aggregates that have passed from the ones that have not passed the flakiness gauge."
    png1Step3.style.visibility = "visible";
    arr1Step3.style.visibility = "visible";
    trans1Step3.style.visibility = "visible";
});

trans1Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png1Step3.style.visibility = "hidden";
    arr1Step3.style.visibility = "hidden";

    gif1Step3.style.visibility = "visible";

    setTimeout(() => {
        trans2Step3.style.visibility = "visible";
        arr2Step3.style.visibility = "visible";
    }, 6000);
});

trans2Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr2Step3.style.visibility = "hidden";
    gif1Step3.style.visibility = "hidden";

    gif2Step3.style.visibility = "visible";

    setTimeout(() => {
        trans3Step3.style.visibility = "visible";
        arr3Step3.style.visibility = "visible";
    }, 4000);
});

trans3Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";
    gif2Step3.style.visibility = "hidden";

    gif3Step3.style.visibility = "visible";

    setTimeout(() => {
        trans4Step3.style.visibility = "visible";
        arr4Step3.style.visibility = "visible";
    }, 4000);
});

trans4Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr4Step3.style.visibility = "hidden";
    gif3Step3.style.visibility = "hidden";

    gif4Step3.style.visibility = "visible";

    setTimeout(() => {
        trans5Step3.style.visibility = "visible";
        arr5Step3.style.visibility = "visible";
    }, 6000);
});

trans5Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr5Step3.style.visibility = "hidden";
    gif4Step3.style.visibility = "hidden";

    gif5Step3.style.visibility = "visible";

    setTimeout(() => {
        trans6Step3.style.visibility = "visible";
        arr6Step3.style.visibility = "visible";
    }, 4000);
});

trans6Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr6Step3.style.visibility = "hidden";
    gif5Step3.style.visibility = "hidden";

    gif6Step3.style.visibility = "visible";

    setTimeout(() => {
        trans7Step3.style.visibility = "visible";
        arr7Step3.style.visibility = "visible";
    }, 4000);
});

trans7Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr7Step3.style.visibility = "hidden";
    gif6Step3.style.visibility = "hidden";

    gif7Step3.style.visibility = "visible";

    setTimeout(() => {
        trans8Step3.style.visibility = "visible";
        arr8Step3.style.visibility = "visible";
    }, 6000);
});

trans8Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr8Step3.style.visibility = "hidden";
    gif7Step3.style.visibility = "hidden";

    gif8Step3.style.visibility = "visible";

    setTimeout(() => {
        trans9Step3.style.visibility = "visible";
        arr9Step3.style.visibility = "visible";
    }, 6000);
});

trans9Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr9Step3.style.visibility = "hidden";
    gif8Step3.style.visibility = "hidden";

    gif9Step3.style.visibility = "visible";

    setTimeout(() => {
        trans10Step3.style.visibility = "visible";
        arr10Step3.style.visibility = "visible";
    }, 4000);
});

trans10Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr10Step3.style.visibility = "hidden";
    gif9Step3.style.visibility = "hidden";

    gif10Step3.style.visibility = "visible";

    setTimeout(() => {
        trans11Step3.style.visibility = "visible";
        arr11Step3.style.visibility = "visible";
    }, 6000);
});

trans11Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr11Step3.style.visibility = "hidden";
    gif10Step3.style.visibility = "hidden";

    gif11Step3.style.visibility = "visible";

    setTimeout(() => {
        trans12Step3.style.visibility = "visible";
        arr12Step3.style.visibility = "visible";
    }, 6000);
});

trans12Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr12Step3.style.visibility = "hidden";
    gif11Step3.style.visibility = "hidden";

    gif12Step3.style.visibility = "visible";

    setTimeout(() => {
        gif12Step3.style.visibility = "hidden";

        gif13Step3.style.visibility = "visible";
    }, 4000);

    setTimeout(()=>{
        gif13Step3.style.visibility = "hidden";
        
        instructionsStep3.textContent = "Weigh the aggregates that have passed through the 25-20mm slot on flakiness gauge."
        png2Step3.style.visibility = "visible";
        trans13Step3.style.visibility = "visible";
        arr13Step3.style.visibility = "visible";
    }, 8000);
});

trans13Step3.addEventListener("click", (evt)=>{
    evt.target.style.visibility = "hidden";
    arr13Step3.style.visibility = "hidden";
    png2Step3.style.visibility = "hidden";

    gif14Step3.style.visibility = "visible";

    setTimeout(()=>{
        nextToStep4.style.visibility = "visible";
        arrNext.style.visibility = "visible";
    }, 3000);
});

nextToStep4.addEventListener("click", (evt) => {
    window.location.href = "./step4.html";
});