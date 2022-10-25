const general = () => {
  manuItem().then(
    (value) => (document.querySelector(".subtopic").innerText = value[1])
  );
  //document.querySelector("#resultScore").innerHTML = QuesData;
  
 
}
const Algebral = () => {
    manuItem().then((value) =>
        document.querySelector('.subtopic').innerText = value[2]);
    LoadQuestion();
}
const linear = () => {
    manuItem().then((value) =>
        document.querySelector('.subtopic').innerText = value[3]);
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
    LoadQuestion();
}
const stars = () => {
    manuItem().then((value) =>
        document.querySelector('.subtopic').innerText = value[6]);
    LoadQuestion();
}
const mens = () => {
    manuItem().then((value) =>
        document.querySelector('.subtopic').innerText = value[7]);
     LoadQuestion();
}
const trig = () => {
    manuItem().then((value) =>
        document.querySelector('.subtopic').innerText = value[8]);
    LoadQuestion();
    }
    const percent = () => {
    manuItem().then((value) =>
        document.querySelector('.subtopic').innerText = value[9]);
        LoadQuestion();
    }
    const rigid = () => {
    manuItem().then((value) =>
        document.querySelector('.subtopic').innerText = value[10]);
        LoadQuestion();
}


