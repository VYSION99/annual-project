const QuizData = [
    { 
        question: 'what is the full meaning of JS',
        a:'Job Sacriface',
        b:'Joshua Sacriface',
        c:'Javascript',
        d:'Java Script',
        asn:'options3'
}
  ,  { 
        question: 'what is the name the writer',
        a:'Job Sacriface',
        b:'Joshua Sacriface',
        c:'Codecamps',
        d:'Java~Script',
        asn:'options3'
},
    { 
        question: 'Which of the following is the best IDE/Editor for developers ',
        a:'Visual studio code',
        b:'Vim',
        c:'sublime',
        d:'Notepad',
        asn:'options1'
},
    { 
        question: 'what is the full meaning of CSS',
        a:'Cob Sacrisace',
        b:'Coshua Sacrie Sace',
        c:'Javascript',
        d:'Cascating style sheet',
        asn:'options4'
}
]

const Question = document.querySelector('.questions');
const Answer1 = document.querySelector('#ans1');
const Answer2 = document.querySelector('#ans2');
const Answer3 = document.querySelector('#ans3');
const Answer4 = document.querySelector('#ans4');
const Answers = document.querySelectorAll('.answer');
let QuestionCount = 0;
var QuestionList = QuizData[QuestionCount];
let answer;
const LoadQuestion = ()=>{
Question.innerText= QuizData[QuestionCount].question;
Answer1.innerText= QuizData[QuestionCount].a;
Answer2.innerText= QuizData[QuestionCount].b;
Answer3.innerText= QuizData[QuestionCount].c;
Answer4.innerText= QuizData[QuestionCount].d;
}
LoadQuestion();

const getAnswer = ()=>{
      Answers.forEach( (cunCheck)=>{
    if (cunCheck.checked){
    answer = cunCheck.id
     }
    });
    return answer;
}

function checkFun() {
    
   let scores = 0
    var checkAnswer = getAnswer();
if (checkAnswer=== QuestionList.asn){
    scores++
   
}
QuestionCount++

if (QuestionCount < QuizData.length) {
    LoadQuestion();
}

//console.log(QuizData.ceil())

}




//console.log(QuizData[1].question)