// musicRoute.js
const express = require('express');
const router = express.Router();
const musicController = require("../controllers/musicControler");

router.get('/api/songs', musicController.getSongs);
// router.get('/api/books/:isbn', bookController.getBook);
router.post('/api/songs', musicController.creatSong);
router.put('/api/songs', musicController.updateSong);
// router.delete('/api/songs', musicController.deleteSong);
router.get('/api/songs-byid/:id', musicController.getSongById);
router.delete('/api/songs-byid', musicController.deleteSongById);

// router.get('/api/song-byid/:id', musicController.getSongById); // Expecting ID as a route parameter
// router.post('/api/songs', musicController.createSong);

module.exports = router;
