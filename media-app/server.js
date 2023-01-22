require('dotenv').config()
const express = require ('express');
const app = express();
const port = 3000


app.get("/", (req, res) => {
  res.status(200).json({
    message: 'welcome to our media app'
  })
})




app.listen(port, () => console.log(`app on port ${process.env.PORT}`))