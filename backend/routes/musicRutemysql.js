const express = require('express');
const router = express.Router();
const songsController = require('../controllers/musicControlerMsq');

router.get('/', songsController.getSongs);
router.get('/:id', songsController.getSong);
router.post('/', songsController.insertSong);
router.put('/:id', songsController.updateSong);
router.delete('/:id',songsController.deleteSong);
// router.get('/api/books-categories', bookController.getBooksCategories);

module.exports = router;









///////////////////////////////////////SARVIN

// const express = require("express");
// const router = express.Router();
// const songsController = require("../controllers/musicControlerMsq");

// router.get("/:id", songsController.getSong);

// router.get("/", songsController.getSongs);

// router.post("/", songsController.insertSong);

// // router.put("/:id", coursesController.updateCourse);

// // router.delete("/:id", coursesController.deleteCourse);

// module.exports = router;
