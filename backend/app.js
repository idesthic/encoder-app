const express = require('express')
const app = express()
const port = 3000

const login = require('./login')
const cors = require('cors')
const encode = require('./encode')
const authorization = require('./middleware/authorization')

app.use(cors())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
})
app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use(express.json())

app.post('/login', login)
app.post('/encode', authorization, encode.encodeResponse)
module.exports = app;

app.listen(port, () => console.log(`Example app listening on port ${port}!`))