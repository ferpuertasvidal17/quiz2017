var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');
var tipController = require('../controllers/tip_controller');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// Pagina de creditos
router.get('/author', function(req, res, next) {
    res.render('author');
});

// Autoload de rutas que usen :quizId
router.param('quizId', quizController.load);


// Definición de rutas de /quizzes
router.get('/quizzes',                     quizController.index);
router.get('/quizzes/:quizId(\\d+)',       quizController.show);
router.get('/quizzes/new',                 quizController.new);
router.post('/quizzes',                    quizController.create);
router.get('/quizzes/:quizId(\\d+)/edit',  quizController.edit);
router.put('/quizzes/:quizId(\\d+)',       quizController.update);
router.delete('/quizzes/:quizId(\\d+)',    quizController.destroy);

router.get('/quizzes/:quizId(\\d+)/play',  quizController.play);
router.get('/quizzes/:quizId(\\d+)/check', quizController.check);

router.get('/quizzes/:quizId(\\d+)/tips/new',  tipController.new);
router.post('/quizzes/:quizId(\\d+)/tips', tipController.create);

router.get('/quizzes/:quizId(\\d+)/randomplay', quizController.randomplay);
router.get('/quizzes/:quizId(\\d+)/randomcheck', quizController.randomcheck);


// Pagina de ayuda
router.get('/help', function(req, res, next) {
    res.render('ayuda');
});


module.exports = router;
