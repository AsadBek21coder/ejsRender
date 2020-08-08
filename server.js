const express = require('express')
const app = express()
const port = 8080;
// const cors = reqiure('cors')
// app.use(cors())
function getHomePage (req,res) {
	res.send ('hello')
}
// function getCars (req,res) {
// }
// function getFlowers (req,res) {
// }
function getCategory (req,res) {

	if ( req.params.category == 'default') {
	res.send('Default')
	}
	else if (req.params.category == 'cars'){
	res.send('this is Cars page')
	}
	else if (req.params.category == 'flowers') {
	res.send('this is Flowers page')
	}
	else {
	res.send ( 'Not found' )
	}
	}



app.get('/', getHomePage)
// app.get('/cars', getCars)
// app.get('/flowers', getFlowers)
app.get('/:category', getCategory)



app.listen(port, () => console.log(`Server is running at${port}`))