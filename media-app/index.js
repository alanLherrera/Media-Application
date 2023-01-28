require('dotenv').config()
const express = require('express')
const app = express()
const React = require ('react')
const { sequelize } = require('./models/index')

//const methodOverride = require('method-override')


// Express settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
//app.use(methodOverride('_method'))

// Controllers
app.use( '/View',require('./Controllers'))


//Routes



app.get('/', (req, res) => {
  res.render('homePage')
})




app.get('*', (req, res) => {
  res.status(404).send('<h1> 404 page <h1>')
})


app.listen(process.env.PORT)