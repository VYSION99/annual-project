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

const loadManu = (Scimanu) => {
  for (const i of Scimanu) {
    option1.innerText = Scimanu[0];
    option2.innerText = Scimanu[1];
    option3.innerText = Scimanu[2];
    option4.innerText = Scimanu[3];
    option5.innerText = Scimanu[4];
    option6.innerText = Scimanu[5];
    option7.innerText = Scimanu[6];
    option8.innerText = Scimanu[7];
    option9.innerText = Scimanu[8];
    option10.innerText = Scimanu[9];
    option11.innerText = Scimanu[10];
    //  console.log(i[1]);
    // console.log(i.manu5);
  }
};
SciBase().then((value) => loadManu(value));

// question data manipulations

const Question = document.querySelector(".questions");
const Answer1 = document.querySelector("#ans1");
const Answer2 = document.querySelector("#ans2");
const Answer3 = document.querySelector("#ans3");
const Answer4 = document.querySelector("#ans4");
const Answers = document.querySelectorAll(".answers");
QuestionCount = Math.floor(Math.random() * 10);
QuestionCount1 = Math.ceil(Math.random())*0;
let answer;
let scores = 0;
let count = 0;
let Qcount = 1;
let Qcount1 = 0;

const LoadQuestion = () => {
    document.querySelector(".subtopic").innerText = manu[0]
  Question.innerText = workAndMachine[QuestionCount].questions;
  Answer1.innerText = workAndMachine[QuestionCount].a;
  Answer2.innerText = workAndMachine[QuestionCount].b;
  Answer3.innerText = workAndMachine[QuestionCount].c;
  Answer4.innerText = workAndMachine[QuestionCount].d;
};
LoadQuestion();

const getAnswer = () => {
  Answers.forEach((cunCheck) => {
    if (cunCheck.checked) {
      answer = cunCheck.id;
    }
  });
  return answer;
};


function checkAnswers() {    
  var checkAnswer = getAnswer();
   const Subs = document.querySelector(".subtopic").textContent.trim();
    if (Subs == "Work And Machine") {
      if (checkAnswer === workAndMachine[QuestionCount].ans) {
        scores += 3;
        count++;
      }
      Qcount++;
      QuestionCount++;
      if (Qcount === 20) {
        var btn = document.querySelector(".bt");
        var next = document.querySelector(".submit");
        next.remove();
        btn.innerHTML =
          '<button  type="button" class="submit" onclick="result()">Submit</button>';
      }
      if (Qcount < 20) {
        LoadQuestion();
      };
    } else if (Subs === "Heat Energy") {
      if (checkAnswer === heatEnergy[QuestionCount1].ans) {
        scores += 3;
        count++;
      };
       if (Qcount1 == 15) {
         var btn = document.querySelector(".bt");
         var next = document.querySelector(".submit");
         next.remove();
         btn.innerHTML =
           '<button  type="button" class="submit" onclick="result()">Submit</button>';
      };  
      Qcount1++;
      QuestionCount1++;
      if (Qcount1 <= 15) {
        heat();
      };
    }
    else if (Subs === "Nervous system") {
      console.log('hi',QuestionCount1);
      if (checkAnswer === nervous[QuestionCount1].ans) {
        scores += 3;
        count++;
      };
       if (Qcount1 == 15) {
         var btn = document.querySelector(".bt");
         var next = document.querySelector(".submit");
         next.remove();
         btn.innerHTML =
           '<button  type="button" class="submit" onclick="result()">Submit</button>';
      }; 
      Qcount1++;
      QuestionCount1++;
      console.log(Qcount1)
      if (Qcount1 <= 15) {
        Nervous();
      };
    } else if (Subs === "Respiratory System") {
      if (checkAnswer === respiration[QuestionCount1].ans) {
        scores += 3;
        count++;
      };
       if (Qcount1 == 15) {
         var btn = document.querySelector(".bt");
         var next = document.querySelector(".submit");
         next.remove();
         btn.innerHTML =
           '<button  type="button" class="submit" onclick="result()">Submit</button>';
      };
      Qcount1++;
      QuestionCount1++;
      if (Qcount1 <= 15) {
        Respiration();
      };
    } else {
      alert(Error);
  };
 
};
   



const result = () => {
  confirm("Do you really want to submit");
  var results = document.querySelector("#resultScore");
  results.innerHTML = resultPortal;
  var messager = document.querySelector(".message");
  var score = document.querySelector(".scores");
  var counter = document.querySelector(".counter");
  if (scores <= 27) {
    messager.innerHTML =
      '<div class="message">Ohh!!.. You fail the test please try again later</div>';
    messager.style.color = "red";
  } else {
    messager.innerHTML =
      '<div class="message">Wow !! Congratulation!!.. You have passed the test sucessfully</div>';
    messager.style.color = "lightgreen";
  }
  score.innerText = `At the end of the test you Scored ${Math.ceil(
    (scores / 3) * 5
  )}%  /100%`;
  counter.innerText = `Your Outcome: ${count}  /20`;
};

//heat energy Question handlings


const heat = () => {
  Question.innerText = heatEnergy[QuestionCount1].questions;
  Answer1.innerText = heatEnergy[QuestionCount1].a;
  Answer2.innerText = heatEnergy[QuestionCount1].b;
  Answer3.innerText = heatEnergy[QuestionCount1].c;
  Answer4.innerText = heatEnergy[QuestionCount1].d;
};
const Nervous = () => {
  Question.innerText = nervous[QuestionCount1].questions;
  Answer1.innerText = nervous[QuestionCount1].a;
  Answer2.innerText = nervous[QuestionCount1].b;
  Answer3.innerText = nervous[QuestionCount1].c;
  Answer4.innerText = nervous[QuestionCount1].d;
};
const Respiration = () => {
  Question.innerText= respiration[QuestionCount1].questions;
  Answer1.innerText = respiration[QuestionCount1].a;
  Answer2.innerText = respiration[QuestionCount1].b;
  Answer3.innerText = respiration[QuestionCount1].c;
  Answer4.innerText = respiration[QuestionCount1].d;
};

let coming_soon=() => {
  Question.innerText =comingSoon[0].questions;
  Answer1.innerText = comingSoon[0].a;
  Answer2.innerText = comingSoon[0].b;
  Answer3.innerText = comingSoon[0].c;
  Answer4.innerText = comingSoon[0].d;
}