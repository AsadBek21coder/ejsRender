const express = require('express')
const app = express()
const port = 8080;
// const cors = reqiure('cors')
// app.use(cors())
function getHomePage (req,res) {
	res.send ('hello')
}
function getCars (req,res) {
	res.send('this is Cars page')
}
function getFlowers (req,res) {
	res.send('this is Flowers page')
}
app.get('/', getHomePage)
app.get('/cars', getCars)
app.get('/flowers', getFlowers)



app.listen(port, () => console.log(`Server is running at${port}`))