const musicModel = require("../models/musicModelMDb");

exports.getSongs = (async(req, res) => {
    try {
        const allSongs = await musicModel.find();
        return res.status(200).json(allSongs);
    }
    catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
});

// exports.getSong = (async(req, res) => {
//     const { id} = req.params;
//     try {
//         const Song = await musicModel.find({id});
//         return res.status(200).json(Song);
//     }
//     catch (error) {
//         return res.status(500).json({
//             error: error.message
//         });
//     }
// });

exports.creatSong = (async(req, res) => {
    const {songTitle, artistName, songGenre } = req.body;

    try {
        const newSong = new musicModel({title:songTitle, name:artistName, genre:songGenre});
        const insertedSong = await newSong.save();
        return res.status(201).json(insertedSong);
    }
    catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
});

exports.updateSong = (async(req, res) => {
    const { songTitle, artistName, songGenre} = req.body;

    try {
        await musicModel.updateOne({id}, {

          title:songTitle, name:artistName, genre:songGenre
        });
        const updateSong = await musicModel.find({id});
        return res.status(200).json(updateSong);
    }
    catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
});

// exports.deleteSong = (async(req, res) => {
//     const { bookIsbn } = req.body;
//     try {
//         const deleteSong = await musicModel.deleteOne({songid:id});
//         return res.status(200).json(deleteSong)
//     }
//     catch (error) {
//         return res.status(500).json({
//             error: error.message
//         });
//     }
// });

exports.getSongById = (async(req, res) => {
    const { id } = req.params;
    try {
        const song = await musicModel.findById(id);
        return res.status(200).json(song);
    }
    catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
});

exports.deleteSongById = (async(req, res) => {
    const { id } = req.body;
    try {
        const deleteSong = await musicModel.findByIdAndDelete(id);
        return res.status(200).json(deleteSong);
    }
    catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
});



// const musicModel = require('../models/musicModelMDb')

// exports.getSong = (async(req, res)=>{
//   const {id} = req.params
//   try {
//     const song = await musicModel.findById(id)
//     return res.status(200).json(song)
//   }
//   catch(error){
//     return res.status(500).json({
//       error: error.message

//     })
//   }

// })




// const getSong = (req, res) => {
//   musicModel.findById(req.params.id)
//     .then((result) => {
//       if (!result) res.status(404).send("No song found with the given ID");
//       res.send(result);
//     })
//     .catch((error) => {
//       console.error(error);
//       res.status(500).send("Internal server error");
//     });
// };

// module.exports = {
//   getSong
// };

// musicController.js

// const MusicModel = require('../models/music-model');


