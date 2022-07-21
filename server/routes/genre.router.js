const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  const query = `SELECT * FROM movies
  JOIN movies_genres ON movies_genres.movie_id = movies.id
  JOIN genres ON genres.id = movies_genres.genre_id;`;
  pool.query( query )
    .then( result => {
      res.send( result.rows )
      console.log( 'These are the rows:', result.rows)
    }).catch( error =>{
      console.log( 'Error in GET movie details:', error );
      res.sendStatus(500)
    })
});

module.exports = router;


