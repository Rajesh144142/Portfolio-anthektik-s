const express = require('express');
const cors = require('cors');
const sendit = require('./messageSend');
const Authrouter = require('./routes/AuthenticationRoutes');
const Project = require('./routes/ProjectRoute');
const connect = require('./db');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path')
require('dotenv').config();

const app = express();

//--------------------Middleware---------------------------
app.use(morgan('tiny'));
app.use(cors());
app.use(cookieParser());
app.use(express.json({ limit: '20mb' }));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));





//--------Define your routes here-----------
app.post('/submit-otp', sendit.sendmessage);
app.use('/auth', Authrouter);
app.use('/Pro', Project);





//------------deployment--------------------
const __dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/Client/dist")))
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname1, "/Client/dist/index.html"))
  });
} else {
  app.get("/", (req, res) => { res.send("API is Running Successfully...."); })
}


// --------------Database calling------------
const port = process.env.PORT || 5000;
connect()
  .then((response) => {
    app.listen(port, () => {
      console.log(`Server connected to http://localhost:${port}`);
    });
  })
  .catch(() => {
    console.log("Failed to connect to the database or start the server.");
  });


