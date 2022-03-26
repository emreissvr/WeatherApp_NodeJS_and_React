const express = require('express')
const cors = require('cors')
const router = require('./routers/weather')
const app = express();
const PORT = process.env.PORT || 8080
// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers   
app.use('/api',router)

//server
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})







