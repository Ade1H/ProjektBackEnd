// const mysql = require('mysql2');
// require('dotenv').config();

// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE
// }).promise();

// module.exports = pool;


// const mysql = require('mysql2');
// const { result } = require('underscore');
// // const { updateSong } = require('./controllers/musicControler');
// const pool = mysql.createPool({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'password',
//     database : 'musicsql'
// }).promise()

// module.exports = pool
const getSongs = async()=>{
  const [result] = await  pool.query('select * from songs')
  return result
}

const getSong = async(id)=>{
  const [result] = await pool.query
  (`select * from songs where id =? `, [id] )
  return result[0]
}

const insertSong = async (title,artist,genre)=>{
  const result =  await pool.query("INSERT INTO songs (Title, Artist, Genre) VALUES (?, ?, ?)", [title, artist, genre])
  return result
}

const updateSong = async(id, title) =>{
  const result = await pool.query(`update songs set title = ? where id=? `, [title, id])
  return result
}

const deleteSong = async(id)=>{
  const result = await pool.query(`delete from songs where id = ?`,[id])
  return result
}

const data =  deleteSong (1,'naserya').then((result)=>{
  console.log(result)
})
