const express = require('express') //importa framework express
const cors = require('cors') //importa cors
const bodyParser = require('body-parser') //importa body parser
const mongoose = require('mongoose') //importa orm mongodb
const Result = require('./models')

const url = "mongodb+srv://usuarionuevo:asdasd123@cluster0-xn5vs.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(url, {useNewUrlParser:true}, (error) => {
  if(error){
    console.log(error)
  }
  else {
    console.log("DB conectada")
  }
})

//import express from 'express'
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cors()) //ejecuta cors

app.get('/add/:firstValue/:secondValue', function (req, res) {
  const result = parseFloat(req.params.firstValue) + parseFloat(req.params.secondValue)
  res.send({result:result})
  const newresult = new Result( {value: result})
  newresult.save( (error, result) => {
    if(error)
    {
      console.log(error)
    }
    else {
      console.log(result)
    }
  })
})

app.get('/sub/:firstValue/:secondValue', function(req, res) {
  const result = parseFloat(req.params.firstValue) - parseFloat(req.params.secondValue)
  res.send({result:result})
})

app.get('/mul/:firstValue/:secondValue', function (req, res) {
  const result = parseFloat(req.params.firstValue) * parseFloat(req.params.secondValue)
  res.send({result:result})
})

app.get('/div/:firstValue/:secondValue', function (req, res) {
  const result = parseFloat(req.params.firstValue) / parseFloat(req.params.secondValue)
  res.send({result:result})
})




app.listen(3000, () => {
  console.log("server corriendo en puerto 3000")
}) //levante servidor en puerto 3000
