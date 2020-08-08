const express = require('express')
const app = express()
const ejs = require('ejs')
const port = 8080;

app.set('view engine', 'ejs')
// app.set('views', './')

function getHomePage (req,res) {
	res.render ('index')
}

function getCategory (req,res) {

	if ( req.params.category == 'cars') {
	res.render ('cars')
	}
	else if (req.params.category == 'flowers') {
	res.render('flowers')
	}
	else {
	res.send ( 'Not found' )
	}
	}



app.get('/', getHomePage)
app.get('/:category?', getCategory)



app.listen(port, () => console.log(`Server is running at${port}`))