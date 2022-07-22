const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  const id = req.params
  const sqlText = `SELECT * FROM genres
  JOIN movies_genres ON movies_genres.genre_id = genres.id
  JOIN movies ON movies.id = movies_genres.movie_id WHERE movie_id = ${id};`;
  pool.query( sqlText )
    .then( response => {
      res.send( response.rows )
      console.log( 'These are the rows:', response.rows)
    }).catch( error =>{
      console.log( 'Error in GET movie details:', error );
      res.sendStatus(500)
    })
});

module.exports = router;


