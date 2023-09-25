const express = require('express');
const cors = require('cors');
const sendit = require('./messageSend');
const Authrouter = require('./routes/AuthenticationRoutes'); // Corrected the path
const Project =require('./routes/ProjectRoute');
const app = express();
const connection = require('./db');
const bodyParser = require('body-parser');
// const cookieParser=require('cookie-parser')
require('dotenv').config(); // Moved dotenv config to the top

// Enable CORS
app.use(cors());
app.use(express.json({ limit: '20mb' }));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
// app.use(cookieParser())
// Define your routes here


app.post('/submit-otp', sendit.sendmessage);
// Database calling
connection();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
app.use('/auth', Authrouter);
app.use('/Pro',Project)
