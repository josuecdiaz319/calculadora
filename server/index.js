const express = require('express') //importa framework express
const cors = require('cors') //importa cors
const bodyParser = require('body-parser') //importa body parser
//import express from 'express'
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cors()) //ejecuta cors

app.get('/getresult/:firstValue/:secondValue/:selectedOperator', function (req, res) {
  //console.log(req.params)
  //res.send({label:'Hello World'})
const firstValue = parseFloat(req.params.firstValue)
const secondValue = parseFloat(req.params.secondValue)

  switch(req.params.selectedOperator)
  {
    case 'add':

      result = firstValue + secondValue
      break;

    case 'sub':

      result = firstValue - secondValue
      break;

    case 'mul':

      result = firstValue * secondValue
      break;

    case 'div':

      result = firstValue / secondValue;
      break;

  }
  res.send({result:result})
})

app.listen(3000, () => {
  console.log("server corriendo en puerto 3000")
}) //levante servidor en puerto 3000
