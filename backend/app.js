

// const cors = require('cors');
// const path = require('path');
// const express = require("express");
// const app = express();
// const port = 3000;

// // Parse JSON bodies
// app.use(express.json());

// // For parsing application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));

// app.use(cors());
// // app.use(express.static('public'));
//  app.use(express.static(path.join(__dirname, '../Frontend/public-mysql')));

// const musicRoute = require('./routes/musicRutemysql');


// app.use(musicRoute);
// // app.use(categoryRoutes);

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));



/////////////////////////////////////////////////// SARWIN

// const Logger = require("./logger");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const songsRoute = require('./routes/musicRutemysql')
const path = require('path');
// const homeRoute = require("./routes/home-route")

require("dotenv").config();

const startupDebug = require("debug")("startup")
const dbDebug = require("debug")("db")

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../Frontend/public-mysql')))
// app.use(express.static('public'))
// app.use(Logger);
app.use(helmet());

startupDebug("hello from startup debug")
if (app.get("env") === "development") app.use(morgan("tiny"));

//   Key=value&key2=value2
app.use(express.urlencoded({ extended: true }));


app.use('/api/songs' , songsRoute)
// app.use('/' , homeRoute)




const port = process.env.APP_PORT || 3000;
app.listen(port, () => {
  console.log(`listen on port ${port}`);
});







//////////////////////////////////////////MONGOS
// const express = require('express');
// const cors = require('cors');
// const path = require('path');

// const app = express();
// const port = 3006;


// app.use(express.json());


// app.use(express.urlencoded({ extended: true }));

// app.use(cors());
// app.use(express.static(path.join(__dirname, '../Frontend/public-mdb')));
// // app.use(express.static(path.join(__dirname, '../Frontend/public-mysql')));

// const musicRoutes = require('./routes/musicRute');
// const musicRutemysql = require('./routes/musicRutemysql')
// app.use(musicRoutes);
// app.use(musicRutemysql);

// const connectionMDb = require('./connectionMDb');
// connectionMDb();



// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
