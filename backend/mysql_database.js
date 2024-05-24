const mysql = require('mysql2')

mysql.createPool({
  
})

const getSongs = async () => {
  const [result] = await pool.query("select * from songs");
  return result;
};

// const getCourse = async (id) => {
//   const [result] = await pool.query(`select * from songs where id=? `, [id]);
//   return result[0];
// };

const insertSong = async (title, artist, genre) => {
  const [result] = await pool.query(
      "INSERT INTO songs (Title ,Artist, Genre) VALUES (?, ?, ?)",
      [title, artist, genre]
  );
  return getSongs(result.insertId);
}

// const updateCourse = async (id, title) => {
//   const [result] = await pool.query(
//     `
//      update courses set title = ? where id = ?`,
//     [title, id]
//   );
//   return getCourse(id);
// };

// const deleteCourse = async (id) => {
//   const result = pool.query("delete from courses where Id = ?", [id]);
//   return id
// };

// const callStoredProcedure = async(id)=>{
//     const [result] = await pool.query('call sp_select (?)' , [id])
//     return result[0]
// }
// const data = callStoredProcedure(40).then((result) => {
//   console.log(result);
// });
