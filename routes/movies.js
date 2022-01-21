const express = require('express');
const router = express.Router();
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
 
router.get('/:take:skip', async function(req, res, next) {
    const movies = await prisma.movies.findMany({
        skip:10,
        take: 10
        })
  res.send({
      data: movies,
      pagination : {
          count : total, // Total des enregistrements
          take: limit,   // Nombre d'éléments sélectionnés
          skip: offset   // Décalage à partir duquel on prend les  données
      }
  });

});
 
module.exports = router;