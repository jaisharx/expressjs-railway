import bodyParser from 'body-parser'
import express from 'express'

const app = express()
const port = process.env.PORT || 3333

app.use(bodyParser.json())
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
app.use(bodyParser.text({ type: 'text/html' }))

app.get('/', async (req, res) => {
  res.json({
    status: 'Ok',
  })
})

app.get('/about', async (req, res) => {
  res.json({
    name: 'Jai Sharma',
    age: 21,
    country: 'India',
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
