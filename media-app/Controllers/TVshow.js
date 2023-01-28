const TVshow = require('express').Router()
const { Op } = require('sequelize')
const show = require('../models/show')

//Finding movies
TVshow.get('/', async (req, res) => {
 try{
  let foundShows = await show.findAll({
    attributes: ['id', 'name', 'genre'],
    order:[['name', 'ASC']],
    include: { all:true },
  }) 
  return res.status(200).json(foundShows)
 } catch (error) {
  console.log(error);
  return res.status(500).json(error)
 }
})

//find a specific movie
TVshow.get('/:name', async (req, res) => {
  try{
    const foundShows = await show.findOne({
      where: { name: req.params.name },
      
    });
    if(!foundShows) return res.status(404).json('not Found')
    return res.status(200).json(foundShows)
  } catch (err){
    return res.status(500).json(err)
  }
} )

//Add movie
TVshow.put(':/id', async (req, res) => {
try {
  const addShow = await show.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  return res.status(200).json({
    message: `new TV show added !`
  })
} catch(err) {
  return res.status(500).json(err)
}
})



module.exports = TVshow