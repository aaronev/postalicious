const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
const port = 3000

app.set('view engine', 'pug')
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function(req, res) {
  res.render('index')
})

let requestInfo
let requestedBody

app.post('/request/post', function(req, res) {
  console.log(req.body)
  request('http://www.google.com', function (error, response, body) {
    requestedBody = body
  })

  res.render('index', {reqBody: JSON.stringify(req.body), resBody: requestedBody})
})

app.listen(port, function() {
  console.log('Example app listening on port ' + port +'!!!!')
})