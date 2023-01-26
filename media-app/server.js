require('dotenv').config()
const express = require ('express');
const app = express();
const port = 3000
const{ movieController, musicController, showController } = require('./Controllers')

app.use(express.json())

//Middleware
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
  res.json('hey this is our media app')
})

//Controllers
app.use('/movie', movieController)
app.use('/music', musicController)
app.use('/show', showController)




app.listen(port, () => console.log(`app on port ${process.env.PORT}`))