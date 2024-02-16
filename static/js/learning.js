function enableSubmitButtonstart() {
    submitButtonStart.removeAttribute("disabled");
}

function disableSubmitButtonstart() {
    submitButtonStart.setAttribute("disabled", "disabled");
}

const trueRadioButtonStart = document.getElementById("start");
const submitButtonStart = document.getElementById("btnForm");

// Enable the submit button when checked
trueRadioButtonStart.addEventListener("change", function() {
    if (trueRadioButtonStart.checked) {
        enableSubmitButtonstart();
    } else {
        disableSubmitButtonstart();
    }
});

// Add event listener for form submission
document.getElementById("btnForm").addEventListener("click", function(event) {
    // Hide the first question and show the second question
    document.getElementById("q").classList.add("d-none")
    document.getElementById("btnForm").classList.add("d-none")

    document.getElementById("form1").classList.remove("d-none")
    document.getElementById("btnForm1").classList.remove("d-none")
});



// ============================= ( 1 ) ======================================

// Variable to keep track of the user's mark
var MarkUser = 0;

// Function to enable the submit button when a radio button is checked
function enableSubmitButton() {
    submitButton.removeAttribute("disabled");
}

const trueRadioButton = document.getElementById("TrueAnswer1");
const falseRadioButton = document.getElementById("FalseAnswer1");
const submitButton = document.getElementById("btnForm1");

// enable the submit button when checked
trueRadioButton.addEventListener("change", enableSubmitButton);
falseRadioButton.addEventListener("change", enableSubmitButton);

// Add event listener for form submission
document.getElementById("btnForm1").addEventListener("click", function(event) {

    if (trueRadioButton.checked) {
        MarkUser += 1;
    }

    // Hide the first question and show the second question
    document.getElementById("q1").classList.add("d-none")
    document.getElementById("btnForm1").classList.add("d-none")

    document.getElementById("form2").classList.remove("d-none")
    document.getElementById("btnForm2").classList.remove("d-none")
});

// ============================= ( 2 ) ======================================
function enableSubmitButton2() {
    submitButton2.removeAttribute("disabled");
}
const trueRadioButton2 = document.getElementById("TrueAnswer2");
const falseRadioButton2 = document.getElementById("FalseAnswer2");
const submitButton2 = document.getElementById("btnForm2");

// enable the submit button when checked
trueRadioButton2.addEventListener("change", enableSubmitButton2);
falseRadioButton2.addEventListener("change", enableSubmitButton2);

// Add event listener for form submission
document.getElementById("btnForm2").addEventListener("click", function(event) {

    if (trueRadioButton2.checked) {
        MarkUser += 1;
    }
    // Hide the first question and show the second question
    document.getElementById("q2").classList.add("d-none")
    document.getElementById("btnForm2").classList.add("d-none")

    document.getElementById("form3").classList.remove("d-none")
    document.getElementById("btnForm3").classList.remove("d-none")
});

// ============================= ( 3 ) ======================================
function enableSubmitButton3() {
    submitButton3.removeAttribute("disabled");
}
const trueRadioButton3 = document.getElementById("TrueAnswer3");
const falseRadioButton3 = document.getElementById("FalseAnswer3");
const submitButton3 = document.getElementById("btnForm3");

// enable the submit button when checked
trueRadioButton3.addEventListener("change", enableSubmitButton3);
falseRadioButton3.addEventListener("change", enableSubmitButton3);

// Add event listener for form submission
document.getElementById("btnForm3").addEventListener("click", function(event) {

    if (trueRadioButton3.checked) {
        MarkUser += 1;
    }
    // Hide the first question and show the second question
    document.getElementById("q3").classList.add("d-none")
    document.getElementById("btnForm3").classList.add("d-none")

    document.getElementById("form4").classList.remove("d-none")
    document.getElementById("btnForm4").classList.remove("d-none")

});

// ============================= ( 4 ) ======================================
function enableSubmitButton4() {
    submitButton4.removeAttribute("disabled");
}
const trueRadioButton4 = document.getElementById("TrueAnswer4");
const falseRadioButton4 = document.getElementById("FalseAnswer4");
const submitButton4 = document.getElementById("btnForm4");

// enable the submit button when checked
trueRadioButton4.addEventListener("change", enableSubmitButton4);
falseRadioButton4.addEventListener("change", enableSubmitButton4);

// Add event listener for form submission
document.getElementById("btnForm4").addEventListener("click", function(event) {

    if (trueRadioButton4.checked) {
        MarkUser += 1;
    }
    // Hide the first question and show the second question
    document.getElementById("q4").classList.add("d-none")
    document.getElementById("btnForm4").classList.add("d-none")

    document.getElementById("form5").classList.remove("d-none")
    document.getElementById("btnForm5").classList.remove("d-none")

});

// ============================= ( 5 ) ======================================
function enableSubmitButton5() {
    submitButton5.removeAttribute("disabled");
}
const trueRadioButton5 = document.getElementById("TrueAnswer5");
const falseRadioButton5 = document.getElementById("FalseAnswer5");
const submitButton5 = document.getElementById("btnForm5");

// enable the submit button when checked
trueRadioButton5.addEventListener("change", enableSubmitButton5);
falseRadioButton5.addEventListener("change", enableSubmitButton5);

// Add event listener for form submission
document.getElementById("btnForm5").addEventListener("click", function(event) {

    if (trueRadioButton5.checked) {
        MarkUser += 1;
    }
    // Hide the first question and show the second question
    document.getElementById("q5").classList.add("d-none")
    document.getElementById("btnForm5").classList.add("d-none")

    document.getElementById("form6").classList.remove("d-none")
    document.getElementById("btnForm6").classList.remove("d-none")

});

// ============================= ( 6 ) ======================================
function enableSubmitButton6() {
    submitButton6.removeAttribute("disabled");
}
const trueRadioButton6 = document.getElementById("TrueAnswer6");
const falseRadioButton6 = document.getElementById("FalseAnswer6");
const submitButton6 = document.getElementById("btnForm6");

// enable the submit button when checked
trueRadioButton6.addEventListener("change", enableSubmitButton6);
falseRadioButton6.addEventListener("change", enableSubmitButton6);

// Add event listener for form submission
document.getElementById("btnForm6").addEventListener("click", function(event) {

    if (trueRadioButton6.checked) {
        MarkUser += 1;
    }
    // Hide the first question and show the second question
    document.getElementById("q6").classList.add("d-none")
    document.getElementById("btnForm6").classList.add("d-none")

    document.getElementById("form7").classList.remove("d-none")
    document.getElementById("btnForm7").classList.remove("d-none")

});

// ============================= ( 7 ) ======================================
function enableSubmitButton7() {
    submitButton7.removeAttribute("disabled");
}
const trueRadioButton7 = document.getElementById("TrueAnswer7");
const falseRadioButton7 = document.getElementById("FalseAnswer7");
const submitButton7 = document.getElementById("btnForm7");

// enable the submit button when checked
trueRadioButton7.addEventListener("change", enableSubmitButton7);
falseRadioButton7.addEventListener("change", enableSubmitButton7);

// Add event listener for form submission
document.getElementById("btnForm7").addEventListener("click", function(event) {

    if (trueRadioButton7.checked) {
        MarkUser += 1;
    }
    // Hide the first question and show the second question
    document.getElementById("q7").classList.add("d-none")
    document.getElementById("btnForm7").classList.add("d-none")

    document.getElementById("form8").classList.remove("d-none")
    document.getElementById("btnForm8").classList.remove("d-none")

});

// ============================= ( 8 ) ======================================
function enableSubmitButton8() {
    submitButton8.removeAttribute("disabled");
}
const trueRadioButton8 = document.getElementById("TrueAnswer8");
const falseRadioButton8 = document.getElementById("FalseAnswer8");
const submitButton8 = document.getElementById("btnForm8");

// enable the submit button when checked
trueRadioButton8.addEventListener("change", enableSubmitButton8);
falseRadioButton8.addEventListener("change", enableSubmitButton8);

// Add event listener for form submission
document.getElementById("btnForm8").addEventListener("click", function(event) {

    if (trueRadioButton8.checked) {
        MarkUser += 1;
    }
    // Hide the first question and show the second question
    document.getElementById("q8").classList.add("d-none")
    document.getElementById("btnForm8").classList.add("d-none")

    document.getElementById("form9").classList.remove("d-none")
    document.getElementById("btnForm9").classList.remove("d-none")

});

// ============================= ( 9 ) ======================================
function enableSubmitButton9() {
    submitButton9.removeAttribute("disabled");
}
const trueRadioButton9 = document.getElementById("TrueAnswer9");
const falseRadioButton9 = document.getElementById("FalseAnswer9");
const submitButton9 = document.getElementById("btnForm9");

// enable the submit button when checked
trueRadioButton9.addEventListener("change", enableSubmitButton9);
falseRadioButton9.addEventListener("change", enableSubmitButton9);

// Add event listener for form submission
document.getElementById("btnForm9").addEventListener("click", function(event) {

    if (trueRadioButton9.checked) {
        MarkUser += 1;
    }
    // Hide the first question and show the second question
    document.getElementById("q9").classList.add("d-none")
    document.getElementById("btnForm9").classList.add("d-none")

    document.getElementById("form10").classList.remove("d-none")
    document.getElementById("btnForm10").classList.remove("d-none")

});

// ============================= ( 10 ) ======================================
function enableSubmitButton10() {
    submitButton10.removeAttribute("disabled");
}
const trueRadioButton10 = document.getElementById("TrueAnswer10");
const falseRadioButton10 = document.getElementById("FalseAnswer10");
const submitButton10 = document.getElementById("btnForm10");

// enable the submit button when checked
trueRadioButton10.addEventListener("change", enableSubmitButton10);
falseRadioButton10.addEventListener("change", enableSubmitButton10);

// Add event listener for form submission
document.getElementById("btnForm10").addEventListener("click", function(event) {

    if (trueRadioButton10.checked) {
        MarkUser += 1;
    }
    // Hide the first question and show the second question
    document.getElementById("q10").classList.add("d-none")
    document.getElementById("btnForm10").classList.add("d-none")

    document.getElementById("form11").classList.remove("d-none")
    document.getElementById("btnForm11").classList.remove("d-none")

});

// ============================= ( 11 ) ======================================
function enableSubmitButton11() {
    submitButton11.removeAttribute("disabled");
}
const trueRadioButton11 = document.getElementById("TrueAnswer11");
const falseRadioButton11 = document.getElementById("FalseAnswer11");
const submitButton11 = document.getElementById("btnForm11");

// enable the submit button when checked
trueRadioButton11.addEventListener("change", enableSubmitButton11);
falseRadioButton11.addEventListener("change", enableSubmitButton11);

// Add event listener for form submission
document.getElementById("btnForm11").addEventListener("click", function(event) {

    if (falseRadioButton11.checked) {
        MarkUser += 1;
    }
    // Hide the first question and show the second question
    document.getElementById("q11").classList.add("d-none")
    document.getElementById("btnForm11").classList.add("d-none")

    document.getElementById("form12").classList.remove("d-none")
    document.getElementById("btnForm12").classList.remove("d-none")

});

// ============================= ( 12 ) ======================================
function enableSubmitButton12() {
    submitButton12.removeAttribute("disabled");
}
const trueRadioButton12 = document.getElementById("TrueAnswer12");
const falseRadioButton12 = document.getElementById("FalseAnswer12");
const submitButton12 = document.getElementById("btnForm12");

// enable the submit button when checked
trueRadioButton12.addEventListener("change", enableSubmitButton12);
falseRadioButton12.addEventListener("change", enableSubmitButton12);

// Add event listener for form submission
document.getElementById("btnForm12").addEventListener("click", function(event) {

    if (falseRadioButton12.checked) {
        MarkUser += 1;
    }
    // Hide the first question and show the second question
    document.getElementById("q12").classList.add("d-none")
    document.getElementById("btnForm12").classList.add("d-none")

    document.getElementById("form13").classList.remove("d-none")
    document.getElementById("btnForm13").classList.remove("d-none")

});

// ============================= ( 13 ) ======================================
function enableSubmitButton13() {
    submitButton13.removeAttribute("disabled");
}
const trueRadioButton13 = document.getElementById("TrueAnswer13");
const falseRadioButton13 = document.getElementById("FalseAnswer13");
const submitButton13 = document.getElementById("btnForm13");

// enable the submit button when checked
trueRadioButton13.addEventListener("change", enableSubmitButton13);
falseRadioButton13.addEventListener("change", enableSubmitButton13);

// Add event listener for form submission
document.getElementById("btnForm13").addEventListener("click", function(event) {

    if (falseRadioButton13.checked) {
        MarkUser += 1;
    }
    // Hide the first question and show the second question
    document.getElementById("q13").classList.add("d-none")
    document.getElementById("btnForm13").classList.add("d-none")

    document.getElementById("form14").classList.remove("d-none")
    document.getElementById("btnForm14").classList.remove("d-none")

});

// ============================= ( 14 ) ======================================
function enableSubmitButton14() {
    submitButton14.removeAttribute("disabled");
}
const trueRadioButton14 = document.getElementById("TrueAnswer14");
const falseRadioButton14 = document.getElementById("FalseAnswer14");
const submitButton14 = document.getElementById("btnForm14");

// enable the submit button when checked
trueRadioButton14.addEventListener("change", enableSubmitButton14);
falseRadioButton14.addEventListener("change", enableSubmitButton14);

// Add event listener for form submission
document.getElementById("btnForm14").addEventListener("click", function(event) {

    if (falseRadioButton14.checked) {
        MarkUser += 1;
    }
    // Hide the first question and show the second question
    document.getElementById("q14").classList.add("d-none")
    document.getElementById("btnForm14").classList.add("d-none")

    document.getElementById("form15").classList.remove("d-none")
    document.getElementById("btnForm15").classList.remove("d-none")

});

// ============================= ( 15 ) ======================================
function enableSubmitButton15() {
    submitButton15.removeAttribute("disabled");
}
const trueRadioButton15 = document.getElementById("TrueAnswer15");
const falseRadioButton15 = document.getElementById("FalseAnswer15");
const submitButton15 = document.getElementById("btnForm15");

// enable the submit button when checked
trueRadioButton15.addEventListener("change", enableSubmitButton15);
falseRadioButton15.addEventListener("change", enableSubmitButton15);

// Add event listener for form submission
document.getElementById("btnForm15").addEventListener("click", function(event) {

    if (falseRadioButton15.checked) {
        MarkUser += 1;
    }
    // Hide the first question and show the second question
    document.getElementById("q15").classList.add("d-none")
    document.getElementById("btnForm15").classList.add("d-none")

    document.getElementById("form16").classList.remove("d-none")
    document.getElementById("btnForm16").classList.remove("d-none")

});

// ============================= ( 16 ) ======================================
function enableSubmitButton16() {
    submitButton16.removeAttribute("disabled");
}
const trueRadioButton16 = document.getElementById("TrueAnswer16");
const falseRadioButton16 = document.getElementById("FalseAnswer16");
const submitButton16 = document.getElementById("btnForm16");

// enable the submit button when checked
trueRadioButton16.addEventListener("change", enableSubmitButton16);
falseRadioButton16.addEventListener("change", enableSubmitButton16);

// Add event listener for form submission
document.getElementById("btnForm16").addEventListener("click", function(event) {

    if (falseRadioButton16.checked) {
        MarkUser += 1;
    }

    document.getElementById("q16").classList.add("d-none")
    document.getElementById("btnForm16").classList.add("d-none")

    if (MarkUser > 8) {
        window.location.href = "../taeqid.html";
    } else {
        window.location.href = "../tabsit.html";
    }

});