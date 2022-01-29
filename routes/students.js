var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const StudentModel = require('../models/student.model');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Student route works');
});

router.post('/add', function(req, res, next) {
  let newStudents = new StudentModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    dob: req.body.dob,
    department: req.body.department
  });
  newStudents.save(function(err, newStudents){
    if(err)
    res.send(err);
    else
    res.send({status:200, message:"User Added Succesfully",studentObj:newStudents});

  });
});

router.get('/list', function(req, res, next) {
  
  StudentModel.find(function(err, response){
    if(err)
    res.send(err);
    else
    res.send({status:200, students:response});

  });
});
router.get('/searchByFirstName', function(req, res, next) {
  const firstNameQuery= req.query.firstName;
  StudentModel.find({fisrtName: firstNameQuery},function(err, response){
    if(err)
    res.send(err);
    else
    res.send({status:200, students:response});

  });
});
router.get('/searchById', function(req, res, next) {
  const idQuery= req.query.id;
  StudentModel.findById(idQuery,function(err, response){
    if(err)
    res.send(err);
    else
    res.send({status:200, students:response});

  });
});

router.put('/update', function(req, res, next) {
  const department= req.query.department;
  StudentModel.update({age:30},{department:department},function(err, response){
    if(err)
    res.send(err);
    else
    res.send({status:200, students:response});

  });
});
router.put('/updateUser', function(req, res, next) {
  const id= req.query.userId;
  const dept =req.query.department;
  StudentModel.findByIdAndUpdate(id,{departmnet: dept},function(err, response){
    if(err)
    res.send(err);
    else
    res.send({status:200, students:response});

  });
});
router.delete('/updateUser', function(req, res, next) {
  const id= req.query.userId;
  StudentModel.findByIdAndDelete(id,function(err, response){
    if(err)
    res.send(err);
    else
    res.send({status:200, students:response});

  });
});
router.delete('/updateUser', function(req, res, next) {
  const id= req.query.userId;
  StudentModel.remove({firstName:"Virat"},function(err, response){
    if(err)
    res.send(err);
    else
    res.send({status:200, students:response});

  });
});
module.exports = router;
