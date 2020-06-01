var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var FilmModel = require('../../hbsExample/models/filmModel.js')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/listado', (req, res, next) => {
  FilmModel.fetchAll((error, films) => {
    if (error) return res.status(500).json(error);
    res.render('film_list.hbs', {
      title: 'Listado de peliculas',
      layout: 'layout',
      films
    });
  })
});

router.get('/insertar', (req, res, next) => {
  const FILM = {
    "title": "Es una prueba2",
    "language_id": 1,
  };
  FilmModel.insert(FILM, (error, insertID) => {
    if (insertID) {
      return res.status(200).send('Añadido pelicula->' + insertID);
    }
    res.status(500).json('Error guardando película' + error);
  });
});


module.exports = router;
