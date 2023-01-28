const musics = require('express').Router()
const { media } = require('../models')
const { Op } = require('sequelize')
const music = require('../models/music')

//Finding movies
musics.get('/', async (req, res) => {
 try{
  let foundMusic = await music.findAll({
    attributes: ['id', 'name', 'genre'],
    order:[['name', 'ASC']],
    include: { all:true },
  }) 
  return res.status(200).json(foundMusic)
 } catch (error) {
  console.log(error);
  return res.status(500).json(error)
 }
})

//find a specific movie
musics.get('/:name', async (req, res) => {
  try{
    const foundMusic = await music.findOne({
      where: { name: req.params.name },
      
    });
    if(!foundMusic) return res.status(404).json('not Found')
    return res.status(200).json(foundMusic)
  } catch (err){
    return res.status(500).json(err)
  }
} )

//Add movie
musics.put(':/id', async (req, res) => {
try {
  const addMusic = await music.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  return res.status(200).json({
    message: `new song added !`
  })
} catch(err) {
  return res.status(500).json(err)
}
})



module.exports = musics