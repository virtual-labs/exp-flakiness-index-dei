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
    document.getElementById("png6").style.visibility = "hidden";
    document.getElementById("arr6").style.visibility = "hidden";
    document.getElementById("trans6").style.visibility = "hidden";


}


function moveplate9() {

    document.getElementById("gif10").style.visibility = "visible";
    document.getElementById("png7").style.visibility = "hidden";
    document.getElementById("arr10").style.visibility = "hidden";
    document.getElementById("trans10").style.visibility = "hidden";

    myTimeout10 = setTimeout(myGreeting10, 6000);
}



// time function

function myGreeting10() {

    // document.getElementById("gif10").style.visibility = "hidden";
    document.getElementById("arr11").style.visibility = "visible";
    document.getElementById("trans11").style.visibility = "visible";

    myStopFunction10();
}


function myStopFunction10() {

    clearTimeout(myTimeout10);

}

function moveplate10() {

    document.getElementById("gif11").style.visibility = "visible";
    document.getElementById("gif10").style.visibility = "hidden";
    document.getElementById("arr11").style.visibility = "hidden";
    document.getElementById("trans11").style.visibility = "hidden";

    myTimeout11 = setTimeout(myGreeting11, 5000);
}



// time function

function myGreeting11() {

    // document.getElementById("gif10").style.visibility = "hidden";
    document.getElementById("arr12").style.visibility = "visible";
    document.getElementById("trans12").style.visibility = "visible";

    myStopFunction11();
}


function myStopFunction11() {

    clearTimeout(myTimeout11);

}


function moveplate11() {

    document.getElementById("gif12").style.visibility = "visible";
    document.getElementById("gif11").style.visibility = "hidden";
    document.getElementById("arr12").style.visibility = "hidden";
    document.getElementById("trans12").style.visibility = "hidden";

    myTimeout12 = setTimeout(myGreeting12, 6000);
}



// time function

function myGreeting12() {

    // document.getElementById("gif10").style.visibility = "hidden";
    document.getElementById("arr13").style.visibility = "visible";
    document.getElementById("trans13").style.visibility = "visible";

    myStopFunction12();
}


function myStopFunction12() {

    clearTimeout(myTimeout12);

}

function moveplate12() {

    document.getElementById("gif13").style.visibility = "visible";
    document.getElementById("gif12").style.visibility = "hidden";
    document.getElementById("arr13").style.visibility = "hidden";
    document.getElementById("trans13").style.visibility = "hidden";

    myTimeout13 = setTimeout(myGreeting13, 6000);
}



// time function

function myGreeting13() {

    document.getElementById("gif14").style.visibility = "visible";
    document.getElementById("next5").style.visibility = "visible";

    myStopFunction13();
}


function myStopFunction13() {

    clearTimeout(myTimeout13);

}

// Step7

function step7() {
    document.getElementById("Step7").style.visibility = "visible";
    document.getElementById("Step6").style.visibility = "hidden";
    document.getElementById("next5").style.visibility = "hidden";
    document.getElementById("gif14").style.visibility = "hidden";
    document.getElementById("png7").style.visibility = "hidden";
    // document.getElementById("png6").style.visibility = "hidden";
    document.getElementById("arr10").style.visibility = "hidden";
    document.getElementById("trans10").style.visibility = "hidden";
    // 
}

function moveplate13() {
    debugger;
    document.getElementById("gif15").style.visibility = "visible";
    document.getElementById("png8").style.visibility = "hidden";
    document.getElementById("arr14").style.visibility = "hidden";
    document.getElementById("trans14").style.visibility = "hidden";

    myTimeout14 = setTimeout(myGreeting14, 5000);
}



// time function

function myGreeting14() {


    document.getElementById("next6").style.visibility = "visible";

    myStopFunction14();
}


function myStopFunction14() {

    clearTimeout(myTimeout14);

}

// Step8

function step8() {

    document.getElementById("Step8").style.visibility = "visible";
    document.getElementById("Step7").style.visibility = "hidden";
    document.getElementById("next6").style.visibility = "hidden";
    document.getElementById("gif15").style.visibility = "hidden";
    document.getElementById("png8").style.visibility = "hidden";
    // document.getElementById("png6").style.visibility = "hidden";
    document.getElementById("arr14").style.visibility = "hidden";
    document.getElementById("trans14").style.visibility = "hidden";
    // 
}

function moveplate14() {

    document.getElementById("gif16").style.visibility = "visible";
    document.getElementById("png9").style.visibility = "hidden";
    document.getElementById("arr15").style.visibility = "hidden";
    document.getElementById("trans15").style.visibility = "hidden";

    myTimeout15 = setTimeout(myGreeting15, 6000);
}



// time function

function myGreeting15() {

    // document.getElementById("gif10").style.visibility = "hidden";
    document.getElementById("arr16").style.visibility = "visible";
    document.getElementById("trans16").style.visibility = "visible";

    myStopFunction15();
}


function myStopFunction15() {

    clearTimeout(myTimeout15);

}


function moveplate15() {

    document.getElementById("gif17").style.visibility = "visible";
    document.getElementById("gif16").style.visibility = "hidden";
    document.getElementById("arr16").style.visibility = "hidden";
    document.getElementById("trans16").style.visibility = "hidden";

    myTimeout16 = setTimeout(myGreeting16, 6000);
}



// time function

function myGreeting16() {

    // document.getElementById("gif10").style.visibility = "hidden";
    document.getElementById("arr17").style.visibility = "visible";
    document.getElementById("trans17").style.visibility = "visible";

    myStopFunction16();
}


function myStopFunction16() {

    clearTimeout(myTimeout16);

}

function moveplate16() {

    document.getElementById("gif18").style.visibility = "visible";
    document.getElementById("gif17").style.visibility = "hidden";
    document.getElementById("arr17").style.visibility = "hidden";
    document.getElementById("trans17").style.visibility = "hidden";

    myTimeout17 = setTimeout(myGreeting17, 6000);
}



// time function

function myGreeting17() {

    // document.getElementById("gif10").style.visibility = "hidden";
    document.getElementById("arr18").style.visibility = "visible";
    document.getElementById("trans18").style.visibility = "visible";

    myStopFunction17();
}


function myStopFunction17() {

    clearTimeout(myTimeout17);

}

function moveplate17() {

    document.getElementById("gif19").style.visibility = "visible";
    document.getElementById("gif18").style.visibility = "hidden";
    document.getElementById("arr18").style.visibility = "hidden";
    document.getElementById("trans18").style.visibility = "hidden";

    myTimeout18 = setTimeout(myGreeting18, 6000);
}



// time function

function myGreeting18() {

    // document.getElementById("gif10").style.visibility = "hidden";
    document.getElementById("arr19").style.visibility = "visible";
    document.getElementById("trans19").style.visibility = "visible";

    myStopFunction18();
}


function myStopFunction18() {

    clearTimeout(myTimeout18);

}

function moveplate18() {

    document.getElementById("gif20").style.visibility = "visible";
    document.getElementById("gif19").style.visibility = "hidden";
    document.getElementById("arr19").style.visibility = "hidden";
    document.getElementById("trans19").style.visibility = "hidden";

    myTimeout19 = setTimeout(myGreeting19, 6000);
}



// time function

function myGreeting19() {

    // document.getElementById("gif10").style.visibility = "hidden";
    document.getElementById("arr20").style.visibility = "visible";
    document.getElementById("trans20").style.visibility = "visible";

    myStopFunction19();
}


function myStopFunction19() {

    clearTimeout(myTimeout19);

}

function moveplate19() {

    document.getElementById("gif21").style.visibility = "visible";
    document.getElementById("gif20").style.visibility = "hidden";
    document.getElementById("arr20").style.visibility = "hidden";
    document.getElementById("trans20").style.visibility = "hidden";

    myTimeout20 = setTimeout(myGreeting20, 6000);
}



// time function

function myGreeting20() {

    // document.getElementById("gif10").style.visibility = "hidden";
    document.getElementById("arr21").style.visibility = "visible";
    document.getElementById("trans21").style.visibility = "visible";

    myStopFunction20();
}


function myStopFunction20() {

    clearTimeout(myTimeout20);

}

function moveplate20() {

    document.getElementById("gif22").style.visibility = "visible";
    document.getElementById("gif21").style.visibility = "hidden";
    document.getElementById("arr21").style.visibility = "hidden";
    document.getElementById("trans21").style.visibility = "hidden";

    myTimeout21 = setTimeout(myGreeting21, 6000);
}



// time function

function myGreeting21() {

    // document.getElementById("gif10").style.visibility = "hidden";
    document.getElementById("arr22").style.visibility = "visible";
    document.getElementById("trans22").style.visibility = "visible";

    myStopFunction21();
}


function myStopFunction21() {

    clearTimeout(myTimeout21);

}

function moveplate21() {

    document.getElementById("gif23").style.visibility = "visible";
    document.getElementById("gif22").style.visibility = "hidden";
    document.getElementById("arr22").style.visibility = "hidden";
    document.getElementById("trans22").style.visibility = "hidden";

    myTimeout22 = setTimeout(myGreeting22, 6000);
}



// time function

function myGreeting22() {

    // document.getElementById("gif10").style.visibility = "hidden";
    document.getElementById("arr23").style.visibility = "visible";
    document.getElementById("trans23").style.visibility = "visible";

    myStopFunction22();
}


function myStopFunction22() {

    clearTimeout(myTimeout22);

}

function moveplate22() {

    document.getElementById("gif24").style.visibility = "visible";
    document.getElementById("gif23").style.visibility = "hidden";
    document.getElementById("arr23").style.visibility = "hidden";
    document.getElementById("trans23").style.visibility = "hidden";

    myTimeout23 = setTimeout(myGreeting23, 6000);
}



// time function

function myGreeting23() {

    // document.getElementById("gif10").style.visibility = "hidden";
    document.getElementById("arr24").style.visibility = "visible";
    document.getElementById("trans24").style.visibility = "visible";

    myStopFunction23();
}


function myStopFunction23() {

    clearTimeout(myTimeout23);

}

function moveplate23() {

    document.getElementById("gif25").style.visibility = "visible";
    document.getElementById("gif24").style.visibility = "hidden";
    document.getElementById("arr24").style.visibility = "hidden";
    document.getElementById("trans24").style.visibility = "hidden";

    myTimeout24 = setTimeout(myGreeting24, 6000);
}



// time function

function myGreeting24() {

    // document.getElementById("gif10").style.visibility = "hidden";
    document.getElementById("arr25").style.visibility = "visible";
    document.getElementById("trans25").style.visibility = "visible";

    myStopFunction24();
}


function myStopFunction24() {

    clearTimeout(myTimeout24);

}

function moveplate24() {

    document.getElementById("gif26").style.visibility = "visible";
    document.getElementById("gif25").style.visibility = "hidden";
    document.getElementById("arr25").style.visibility = "hidden";
    document.getElementById("trans25").style.visibility = "hidden";

    myTimeout25 = setTimeout(myGreeting25, 6000);
}



// time function

function myGreeting25() {

    // document.getElementById("gif10").style.visibility = "hidden";
    document.getElementById("arr26").style.visibility = "visible";
    document.getElementById("trans26").style.visibility = "visible";

    myStopFunction25();
}


function myStopFunction25() {

    clearTimeout(myTimeout25);

}

function moveplate25() {

    document.getElementById("gif27").style.visibility = "visible";
    document.getElementById("gif26").style.visibility = "hidden";
    document.getElementById("arr26").style.visibility = "hidden";
    document.getElementById("trans26").style.visibility = "hidden";

    myTimeout26 = setTimeout(myGreeting26, 6000);
}



// time function

function myGreeting26() {

    document.getElementById("gif28").style.visibility = "visible";
    document.getElementById("next7").style.visibility = "visible";
    document.getElementById("gif27").style.visibility = "hidden";


    myStopFunction26();
}


function myStopFunction26() {

    clearTimeout(myTimeout26);

}

// Step9

function step9() {

    document.getElementById("Step9").style.visibility = "visible";
    document.getElementById("Step8").style.visibility = "hidden";
    document.getElementById("next7").style.visibility = "hidden";
    document.getElementById("gif28").style.visibility = "hidden";
    document.getElementById("png9").style.visibility = "hidden";
    // document.getElementById("png6").style.visibility = "hidden";
    document.getElementById("arr15").style.visibility = "hidden";
    document.getElementById("trans15").style.visibility = "hidden";
    
}

function moveplate26() {

    document.getElementById("gif29").style.visibility = "visible";
    document.getElementById("png10").style.visibility = "hidden";
    document.getElementById("arr27").style.visibility = "hidden";
    document.getElementById("trans27").style.visibility = "hidden";

    myTimeout27 = setTimeout(myGreeting27, 6000);
}



// time function

function myGreeting27() {

    
    document.getElementById("next8").style.visibility = "visible";
    

    myStopFunction27();
}


function myStopFunction27() {

    clearTimeout(myTimeout27);

}

// Step10

function step10() {

    document.getElementById("Step10").style.visibility = "visible";
    document.getElementById("Step9").style.visibility = "hidden";
    document.getElementById("next8").style.visibility = "hidden";
    document.getElementById("gif29").style.visibility = "hidden";
    document.getElementById("png10").style.visibility = "hidden";
    // document.getElementById("png6").style.visibility = "hidden";
    document.getElementById("arr27").style.visibility = "hidden";
    document.getElementById("trans27").style.visibility = "hidden";
    
}













