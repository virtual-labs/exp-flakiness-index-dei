// Step 7

const step7 = document.querySelector("#step7");
const instructionsStep7 = document.querySelector("#instructionsStep7");

// images of Step7
const png1Step7 = document.querySelector("#png1Step7");
const png2Step7 = document.querySelector("#png2Step7");

// gifs of Step7
const gif1Step7 = document.querySelector("#gif1Step7");
const gif2Step7 = document.querySelector("#gif2Step7");
const gif3Step7 = document.querySelector("#gif3Step7");
const gif4Step7 = document.querySelector("#gif4Step7");
const gif5Step7 = document.querySelector("#gif5Step7");
const gif6Step7 = document.querySelector("#gif6Step7");
const gif7Step7 = document.querySelector("#gif7Step7");
const gif8Step7 = document.querySelector("#gif8Step7");
const gif9Step7 = document.querySelector("#gif9Step7");

// arrows of Step7
const arrNext = document.querySelector(".arr-next");
const arr1Step7 = document.querySelector("#arr1Step7");
const arr2Step7 = document.querySelector("#arr2Step7");
const arr3Step7 = document.querySelector("#arr3Step7");
const arr4Step7 = document.querySelector("#arr4Step7");
const arr5Step7 = document.querySelector("#arr5Step7");
const arr6Step7 = document.querySelector("#arr6Step7");
const arr7Step7 = document.querySelector("#arr7Step7");
const arr8Step7 = document.querySelector("#arr8Step7");

// transboxes of Step7
const trans1Step7 = document.querySelector("#trans1Step7");
const trans2Step7 = document.querySelector("#trans2Step7");
const trans3Step7 = document.querySelector("#trans3Step7");
const trans4Step7 = document.querySelector("#trans4Step7");
const trans5Step7 = document.querySelector("#trans5Step7");
const trans6Step7 = document.querySelector("#trans6Step7");
const trans7Step7 = document.querySelector("#trans7Step7");
const trans8Step7 = document.querySelector("#trans8Step7");

// next to Step8
const nextToStep8 = document.querySelector("#nextToStep8");

addEventListener("DOMContentLoaded",(evt) =>{
    step7.style.visibility = "visible";
    instructionsStep7.textContent = "Pass the aggregates through the 10-6.3mm slot in flakiness gauge."
    png1Step7.style.visibility = "visible";
    arr1Step7.style.visibility = "visible";
    trans1Step7.style.visibility = "visible";
});

trans1Step7.addEventListener("click", (evt)=>{
    evt.target.style.visibility = "hidden";
    arr1Step7.style.visibility = "hidden";
    png1Step7.style.visibility = "hidden";

    gif1Step7.style.visibility = "visible";
    setTimeout(() => {
        trans2Step7.style.visibility = "visible";
        arr2Step7.style.visibility = "visible";
    }, 3000);
});

trans2Step7.addEventListener("click", (evt)=>{
    evt.target.style.visibility = "hidden";
    arr2Step7.style.visibility = "hidden";
    gif1Step7.style.visibility = "hidden";

    gif2Step7.style.visibility = "visible";

    setTimeout(() => {
        trans3Step7.style.visibility = "visible";
        arr3Step7.style.visibility = "visible"
    }, 5000);
});

trans3Step7.addEventListener("click", (evt)=>{
    evt.target.style.visibility = "hidden";
    arr3Step7.style.visibility = "hidden";
    gif2Step7.style.visibility = "hidden";

    gif3Step7.style.visibility = "visible";

    setTimeout(() => {
        trans4Step7.style.visibility = "visible";
        arr4Step7.style.visibility = "visible"
    }, 6000);
});

trans4Step7.addEventListener("click", (evt)=>{
    evt.target.style.visibility = "hidden";
    arr4Step7.style.visibility = "hidden";
    gif3Step7.style.visibility = "hidden";

    gif4Step7.style.visibility = "visible";

    setTimeout(() => {
        trans5Step7.style.visibility = "visible";
        arr5Step7.style.visibility = "visible"
    }, 5000);
});

trans5Step7.addEventListener("click", (evt)=>{
    evt.target.style.visibility = "hidden";
    arr5Step7.style.visibility = "hidden";
    gif4Step7.style.visibility = "hidden";

    gif5Step7.style.visibility = "visible";

    setTimeout(() => {
        trans6Step7.style.visibility = "visible";
        arr6Step7.style.visibility = "visible"
    }, 6000);
});

trans6Step7.addEventListener("click", (evt)=>{
    evt.target.style.visibility = "hidden";
    arr6Step7.style.visibility = "hidden";
    gif5Step7.style.visibility = "hidden";

    gif6Step7.style.visibility = "visible";

    setTimeout(() => {
        trans7Step7.style.visibility = "visible";
        arr7Step7.style.visibility = "visible"
    }, 6000);
});

trans7Step7.addEventListener("click", (evt)=>{
    evt.target.style.visibility = "hidden";
    arr7Step7.style.visibility = "hidden";
    gif6Step7.style.visibility = "hidden";

    gif7Step7.style.visibility = "visible";

    setTimeout(() => {
        gif7Step7.style.visibility = "hidden";

        gif8Step7.style.visibility = "visible";
    }, 5000);

    setTimeout(() => {
        gif8Step7.style.visibility = "hidden";

        instructionsStep7.textContent = "Weigh the aggregates passing through the 10-6.3mm slot."
        png2Step7.style.visibility = "visible";
        trans8Step7.style.visibility = "visible";
        arr8Step7.style.visibility = "visible"
    }, 8000);
});

trans8Step7.addEventListener("click", (evt) =>{
    evt.target.style.visibility = "hidden";
    arr8Step7.style.visibility = "hidden";
    png2Step7.style.visibility = "hidden";

    gif9Step7.style.visibility = "visible";

    setTimeout(() => {
        nextToStep8.style.visibility = "visible";
        arrNext.style.visibility = "visible";
    }, 3000);
});

nextToStep8.addEventListener("click", (evt) => {
    window.location.href = "./step8.html";
});