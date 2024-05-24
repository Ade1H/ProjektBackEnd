const pool = require('../utilities/mysql-database')

class SongsModel{

  static getSongs = async()=>{
    const [result] = await  pool.query('select * from songs')
    return result
  }

  static  getSong = async(id)=>{
    const [result] = await pool.query
    (`select * from songs where id =? `, [id] )
    return result[0]
  }

  static insertSong = async (title,artist,genre)=>{
    const result =  await pool.query("INSERT INTO songs (Title, Artist, Genre) VALUES (?, ?, ?)", [title, artist, genre])
    return result
  }

  static updateSong = async(id, title) =>{
    const result = await pool.query(`update songs set title = ? where id=? `, [title, id])
    return result
  }

  static deleteSong = async(id)=>{
    const result = await pool.query(`delete from songs where id = ?`,[id])
    return result
  }

}

module.exports = SongsModel
