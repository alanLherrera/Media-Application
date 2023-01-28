const movie = require('express').Router()
const { media } = require('../models')
const { Op } = require('sequelize')
const movies = require('../models/movies')
const router = require('express').Router()


//Finding movies
movie.get('/', async (req, res) => {
 try{
  let foundMovies = await movies.findAll({
    attributes: ['id', 'name', 'genre'],
    order:[['name', 'ASC']],
    include: { all:true },
  }) 
  return res.status(200).json(foundMovies)
 } catch (error) {
  console.log(error);
  return res.status(500).json(error)
 }
})

//find a specific movie
movie.get('/:name', async (req, res) => {
  try{
    const foundMovie = await movies.findOne({
      where: { name: req.params.name },
      
    });
    if(!foundMovie) return res.status(404).json('not Found')
    return res.status(200).json(foundMovie)
  } catch (err){
    return res.status(500).json(err)
  }
} )

//Add movie
movie.put(':/id', async (req, res) => {
try {
  const addMovie = await movies.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  return res.status(200).json({
    message: `new movie added !`
  })
} catch(err) {
  return res.status(500).json(err)
}
})



module.exports = movie