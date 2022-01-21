const express = require('express');
const router = express.Router();
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
 
router.get('/:take/:skip', async function(req, res, next) {
    console.log(req.params.take)
    const movies = await prisma.movies.findMany({
        skip: req.params.skip,
        take: req.params.take
        })
  res.send({
    movies,
  });

});
 
module.exports = router;