// imprementing functions on mathematics enteries
const general = () => {
  manuItem().then(
    (value) => (document.querySelector(".subtopic").innerText = value[1])
  );
  LoadQuestion
}
const Algebral = () => {
    manuItem().then((value) =>
        document.querySelector('.subtopic').innerText = value[2]);  
   alg= QuestionCount++
    if (QuestionCount > alg) {
        LoadQuestion();
    }
}
const linear = () => {
    manuItem().then((value) =>
        document.querySelector('.subtopic').innerText = value[3]);
    QuestionCount--
        LoadQuestion();
    }
const varation = () => {
    manuItem().then((value) =>
        document.querySelector('.subtopic').innerText = value[4]);
    LoadQuestion();
}
const series = () => {
    manuItem().then((value) =>
        document.querySelector('.subtopic').innerText = value[5]);
    QuestionCount++
    LoadQuestion();
}
const stars = () => {
    manuItem().then((value) =>
        document.querySelector('.subtopic').innerText = value[6]);
    QuestionCount--
    LoadQuestion();
}
const mens = () => {
    manuItem().then((value) =>
        document.querySelector('.subtopic').innerText = value[7]);
        QuestionCount++
     LoadQuestion();
}
const trig = () => {
    manuItem().then((value) =>
        document.querySelector('.subtopic').innerText = value[8]);
    QuestionCount--
    LoadQuestion();
    }
    const percent = () => {
    manuItem().then((value) =>
        document.querySelector('.subtopic').innerText = value[9]);
        QuestionCount++
        LoadQuestion();
    }
    const rigid = () => {
    manuItem().then((value) =>
        document.querySelector('.subtopic').innerText = value[10]);
        LoadQuestion();
}

// imprementing functions for science 
// working on the science enteries
var Nervou = () => {
    Nervous();
    document.querySelector('.subtopic').innerText = manu[3];
}
var heatEnergys = () => {
    heat();
    document.querySelector('.subtopic').innerText = manu[1];
};
var Respiratory = () => {
    Respiration();
    document.querySelector('.subtopic').innerText = manu[2];
};

var Organic = () => {
    alert("coming  ??  soon");
    coming_soon();
    document.querySelector('.subtopic').innerText = manu[7];
};

var Parasite = () => {
    alert("coming  ??  soon");
    coming_soon();
    document.querySelector('.subtopic').innerText = manu[5];
};

var Nitrogen = () => {
    alert("coming  ??  soon");
    coming_soon();
    document.querySelector('.subtopic').innerText = manu[4];
};

var Mole = () => {
    alert('coming  ??  soon');
    coming_soon();
    document.querySelector('.subtopic').innerText = manu[6];
};



//getting the url parameters
function FilteringParam() {
    const paramstring = document.URL.split('?')[1];
let params = new URLSearchParams(paramstring);
for (let url of params.entries()) {
    datat = url;
}
return datat;
}
FilteringParam();
//making an if statement to iterate the function of the manu items of each subject
var restdata = document.querySelectorAll('.rest');
var submit = document.querySelector('.submit');
if (datat[0] == 'sci') {
    restdata.forEach(element => {
        element.removeAttribute('onclick')
    }); 
    submit.removeAttribute('onclick')
    restdata[0].setAttribute('onclick', 'LoadQuestion()');
    restdata[1].setAttribute('onclick', 'heatEnergys()');
    restdata[3].setAttribute('onclick', 'Nervou()');
    restdata[2].setAttribute('onclick', 'Respiratory()');
    restdata[4].setAttribute('onclick', 'Nitrogen()');
    restdata[7].setAttribute('onclick', 'Organic()');
    restdata[6].setAttribute('onclick', 'Mole()');
    restdata[5].setAttribute('onclick', 'Parasite()');
    restdata[8].remove(); restdata[9].remove();
    submit.setAttribute('onclick', 'checkAnswers()');
}
