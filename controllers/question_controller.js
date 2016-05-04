"use strict";

var mongoose = require('mongoose');
var Question = require('../models/questions');

// get questions
exports.getQuestions = function(req, res) {
  Question.find({}, function(err, data) {
    if (err) {
      res.send(err);
    }
    
    res.json(data);
  }, function(reject) {
    res.json({data: "Rejected due to " + reject});
  });
};

// add question to db
exports.addQuestion = function(req, res) {

  var question = new Question();

  question.title = req.body.title;
  question.model = req.body.mile;
  question.value = req.body.value;
  question.min_val = req.body.minVal;
  question.max_val = req.body.maxVal;
  question.question = req.body.question;
  question.answers = req.body.answer;

  question.save(function(err, question) {
    if (err) {
      res.send(err);
    }

    res.json(question);
  }, function(reject) {
    res.json({question: "An issue - " + reject});
  });
};
