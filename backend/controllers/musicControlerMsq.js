
const SongsModel = require ('../models/music-modelMsql')

const getSong =(req, res) => {
console.log()
   SongsModel.getSong(parseInt(req.params.id)).then((result)=>{
    if (!result) res.status(404).send("course with given id not found");
    res.send(result);
   })
  }

 const getSongs = (req, res)=>{
    SongsModel.getSongs().then((result)=>{
      res.send(result)
    })
}

// const insertSong = (req, res) => {
//   const { title, artist, genre } = req.body; // Destructure the expected fields
//   if (!title || title.length < 3) {
//     res.status(400).send("Title is required and should be more than 3 characters");
//     return;
//   }
//   SongsModel.insertSong(title, artist, genre).then((result) => res.send(result));
// };


const insertSong = (req, res) => {
  const { title, artist, genre } = req.body;
    if (!req.body.title || req.body.title.length < 3) {
      res.status(400).send("title is required");
      return;
    }
    SongsModel.insertSong(title, artist, genre).then((result)=>
    res.send(result)
    )
  }

  const updateSong = (req, res) => {
    SongsModel.getCourse(parseInt(req.params.id)).then((result)=>{
      if (!result) return res.status(404).send("course with given id not found");
    })
    //const course = courses.find((c) => c.id === parseInt(req.params.id));

    if (!req.body.name || req.body.name.length < 3)
      return res.status(400).send("name is required and more than 3 charachter");

    SongsModel.updateCourse(parseInt(req.params.id) ,req.body.name ).then((result)=>{
      res.send(result);
    })

  }

  const deleteSong = (req, res) => {
    songModel.getCourse(parseInt(req.params.id)).then((result)=>{
      if (!result) return res.status(404).send("course with given id not found");
    })
   SongsModel.deleteCourse(parseInt(req.params.id)).then((result)=>{
    res.send(result)
   })
  }

  module.exports = {


    getSongs,
    getSong,
    insertSong,
    updateSong,
    deleteSong


  }







// /////////////////////CHGPT
// const songModel = require('../models/music-modelMsql');

// const getSongs = (req, res) => {
//   songModel.getSongs().then((result) => {
//     res.send(result);
//   }).catch((error) => {
//     res.status(500).send(error.message);
//   });
// };

// const insertSong = (req, res) => {
//   const { title, artist, genre } = req.body;
//   if (!title || title.length < 3) {
//     res.status(400).send("Title is required and should be at least 3 characters long");
//     return;
//   }
//   songModel.insertSong(title, artist, genre).then((result) => {
//     res.send(result);
//   }).catch((error) => {
//     res.status(500).send(error.message);
//   });
// };

// module.exports = {
//   getSongs,
//   insertSong
// };
