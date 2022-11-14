const express = require("express");
const Router = express.Router();
//const MathQue = require("../Math Sci Quiz/manu items/quizDB")

Router.get('/questions_field_resultScores', (req, res, next) => {
  res.render('result')
})

if ((url = "/questionPortal/mathematics")) {
   try {
    
Router.get('/questionPortal/mathematics', (req, res, next) => {
    res.render('math',{layout:'Maths'});
})
   } catch (error) {
    res.send(error)
   }
 }
if ((url = "/questionPortal/physics")) {
  try {
    Router.get("/questionPortal/physics", (req, res, next) => {
      res.render("phys", { layout: "Phys" });
    });
  } catch (error) {
    res.send(error);
  }
}
if ((url = "/questionPortal/chemistry")) {
  try {
    Router.get("/questionPortal/chemistry", (req, res, next) => {
      res.render("chemis", { layout: "Chems" });
    });
  } catch (error) {
    res.send(error);
  }
}
if ((url = "/questionPortal/economics")) {
  try {
    Router.get("/questionPortal/economics", (req, res, next) => {
      res.render("econs", { layout: "Econs" });
    });
  } catch (error) {
    res.send(error);
  }
}
if ((url = "/questionPortal/science")) {
   try {
    
Router.get("/questionPortal/science", (req, res, next) => {
  res.render("sci", { layout: "Sci" });
  
});
   } catch (error) {
    res.send(error)
   }
 }
if ((url = "/questionPortal/geography")) {
   try {
    
Router.get('/questionPortal/geography', (req, res, next) => {
    res.render('geo',{layout:'Geo'});
})
   } catch (error) {
    res.send(error)
   }
 }







module.exports = Router;