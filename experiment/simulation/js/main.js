function step2() {

    document.getElementById("Step1").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "hidden";
    document.getElementById("Step2").style.visibility = "visible";

}

function moveplate() {
    document.getElementById("png1").style.visibility = "hidden";
    document.getElementById("arr1").style.visibility = "hidden";
    document.getElementById("trans1").style.visibility = "hidden";
    document.getElementById("gif1").style.visibility = "visible";

    myTimeout = setTimeout(myGreeting, 2500);

}


function moveplate1() {
    document.getElementById("gif1").style.visibility = "hidden";
    document.getElementById("trans2").style.visibility = "hidden";
    document.getElementById("arr2").style.visibility = "hidden";
    document.getElementById("png2").style.visibility = "visible";

    myTimeout1 = setTimeout(myGreeting1, 1000);

}


function moveplate2() {
    document.getElementById("png2").style.visibility = "hidden";
    document.getElementById("trans3").style.visibility = "hidden";
    document.getElementById("gif2").style.visibility = "visible";
    document.getElementById("arr3").style.visibility = "hidden";

    myTimeout2 = setTimeout(myGreeting2, 2500);
}

function moveplate3() {
    document.getElementById("gif2").style.visibility = "hidden";
    document.getElementById("trans4").style.visibility = "hidden";
    document.getElementById("gif3").style.visibility = "visible";
    document.getElementById("arr4").style.visibility = "hidden";
    myTimeout3 = setTimeout(myGreeting3, 3000);
}



// time delay function

function myGreeting() {
    document.getElementById("arr2").style.visibility = "visible";
    document.getElementById("trans2").style.visibility = "visible";


    myStopFunction();
}

function myStopFunction() {
    clearTimeout(myTimeout);

}

function myGreeting1() {
    document.getElementById("arr3").style.visibility = "visible";
    document.getElementById("trans3").style.visibility = "visible";


    myStopFunction1();
}

function myStopFunction1() {
    clearTimeout(myTimeout1);

}

function myGreeting2() {
    document.getElementById("arr4").style.visibility = "visible";
    document.getElementById("trans4").style.visibility = "visible";


    myStopFunction();
}

function myStopFunction2() {
    clearTimeout(myTimeout2);

}


function myGreeting3() {
    document.getElementById("next1").style.visibility = "visible";


    myStopFunction3();
}

function myStopFunction3() {
    clearTimeout(myTimeout3);

}

// step3

function step3() {
    document.getElementById("Step3").style.visibility = "visible";
    document.getElementById("Step2").style.visibility = "hidden";
    document.getElementById("next1").style.visibility = "hidden";
    document.getElementById("gif3").style.visibility = "hidden";
    document.getElementById("arr1").style.visibility = "hidden";
    document.getElementById("trans1").style.visibility = "hidden";

}

function assemble() {

    document.getElementById("gif4").style.visibility = "visible";
    document.getElementById("png3").style.visibility = "hidden";
    document.getElementById("assemble").style.visibility = "hidden";

    myTimeout4 = setTimeout(myGreeting4, 12000);

}

function myGreeting4() {
    document.getElementById("next2").style.visibility = "visible";
    myStopFunction4();
}
function myStopFunction4() {
    clearTimeout(myTimeout4);
}

// Step4

function step4() {
    document.getElementById("Step4").style.visibility = "visible";
    document.getElementById("Step3").style.visibility = "hidden";
    document.getElementById("next2").style.visibility = "hidden";
    document.getElementById("gif4").style.visibility = "hidden";
    document.getElementById("png3").style.visibility = "hidden";
    document.getElementById("assemble").style.visibility = "hidden";

}

function moveplate4() {

    document.getElementById("gif5").style.visibility = "visible";
    document.getElementById("png4").style.visibility = "hidden";
    document.getElementById("arr5").style.visibility = "hidden";
    document.getElementById("trans5").style.visibility = "hidden";

    myTimeout5 = setTimeout(myGreeting5, 7500);
}


function myGreeting5() {
    document.getElementById("next3").style.visibility = "visible";
    myStopFunction5();
}


function myStopFunction5() {

    clearTimeout(myTimeout5);

}


// Step5

function step5() {

    document.getElementById("Step5").style.visibility = "visible";
    document.getElementById("Step4").style.visibility = "hidden";
    document.getElementById("next3").style.visibility = "hidden";
    document.getElementById("gif5").style.visibility = "hidden";
    document.getElementById("png4").style.visibility = "hidden";
    document.getElementById("trans5").style.visibility = "hidden";
    document.getElementById("arr5").style.visibility = "hidden";

}


function moveplate5() {
    debugger;
    document.getElementById("gif6").style.visibility = "visible";
    document.getElementById("png5").style.visibility = "hidden";
    document.getElementById("arr6").style.visibility = "hidden";
    document.getElementById("trans6").style.visibility = "hidden";

    myTimeout6 = setTimeout(myGreeting6, 1500);
}



// time function

function myGreeting6() {
    debugger;
    document.getElementById("arr7").style.visibility = "visible";
    document.getElementById("trans7").style.visibility = "visible";
    myStopFunction6();
}


function myStopFunction6() {

    clearTimeout(myTimeout6);

}

function moveplate6() {
    debugger;
    document.getElementById("gif7").style.visibility = "visible";
    document.getElementById("gif6").style.visibility = "hidden";
    document.getElementById("arr7").style.visibility = "hidden";
    document.getElementById("trans7").style.visibility = "hidden";

    myTimeout7 = setTimeout(myGreeting7, 5000);
}



// time function

function myGreeting7() {
    debugger;
    document.getElementById("arr8").style.visibility = "visible";
    document.getElementById("trans8").style.visibility = "visible";
    myStopFunction7();
}


function myStopFunction7() {

    clearTimeout(myTimeout7);

}

function moveplate7() {
    debugger;
    document.getElementById("gif8").style.visibility = "visible";
    document.getElementById("gif7").style.visibility = "hidden";
    document.getElementById("arr8").style.visibility = "hidden";
    document.getElementById("trans8").style.visibility = "hidden";

    myTimeout8 = setTimeout(myGreeting8, 11000);
}



// time function

function myGreeting8() {
    debugger;
    document.getElementById("arr9").style.visibility = "visible";
    document.getElementById("trans9").style.visibility = "visible";
    myStopFunction8();
}


function myStopFunction8() {

    clearTimeout(myTimeout8);

}

function moveplate8() {
    debugger;
    document.getElementById("gif9").style.visibility = "visible";
    document.getElementById("gif8").style.visibility = "hidden";
    document.getElementById("arr9").style.visibility = "hidden";
    document.getElementById("trans9").style.visibility = "hidden";

    myTimeout9 = setTimeout(myGreeting9, 4000);
}



// time function

function myGreeting9() {
    debugger;
    document.getElementById("gif9").style.visibility = "hidden";
    document.getElementById("png6").style.visibility = "visible";
    document.getElementById("next4").style.visibility = "visible";

    myStopFunction9();
}


function myStopFunction9() {

    clearTimeout(myTimeout9);

}



// Step 6

function step6() {
    document.getElementById("Step6").style.visibility = "visible";
    document.getElementById("Step5").style.visibility = "hidden";
    document.getElementById("next4").style.visibility = "hidden";
    document.getElementById("gif9").style.visibility = "hidden";
    document.getElementById("png5").style.visibility = "hidden";
    document.getElementById("arr6").style.visibility = "hidden";
    document.getElementById("trans6").style.visibility = "hidden";

}

