alert("Coming ??? Soon...");

const sooner = [
    {
        questions: 'Wow this will come soon',
    a:'???',
    b:'???',
    c:'???',
    d:'???',}
]
// manu options
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var option5 = document.querySelector("#option5");
var option6 = document.querySelector("#option6");
var option7 = document.querySelector("#option7");
var option8 = document.querySelector("#option8");
var option9 = document.querySelector("#option9");
var option10 = document.querySelector("#option10");
var option11 = document.querySelector("#option11");
// question data manipulations

const Question = document.querySelector(".questions");
const Answer1 = document.querySelector("#ans1");
const Answer2 = document.querySelector("#ans2");
const Answer3 = document.querySelector("#ans3");
const Answer4 = document.querySelector("#ans4");

//inputting questions queries
Question.innerText =sooner[0].questions;
Answer1.innerText = sooner[0].a;
Answer2.innerText = sooner[0].b;
Answer3.innerText = sooner[0].c;
Answer4.innerText = sooner[0].d;