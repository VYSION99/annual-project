const express = require("express");
const Router = express.Router();
//const MathQue = require("../Math Sci Quiz/manu items/quizDB")

Router.get('/questions_field_resultScores', (req, res, next) => {
  res.render('result')
})

Router.get('/questionPortal/mathematics', (req, res, next) => {
    res.render('Ques',{layout:'Maths'});
})







module.exports = Router;