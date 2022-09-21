const express = require('express')
const cors = require('cors')
const multer = require('multer')
const { application } = require('express')
const upload = multer()

const app = express()
app.use(cors())
app.set('port', process.env.port || 3000)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/rawjson', function (req, res) {
  res.send(req.body)

  console.log(req.body)
})

app.put('/rawjson', function (req, res) {
  res.send(req.body)
})

app.delete('/rawjson', function (req, res) {
  res.json(req.query)
})

// Setting the server to listen at port 3000
app.listen(3000, function (_req, _res) {
  console.log('Server is running at port ' + app.get('port'))
})
