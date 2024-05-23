const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')
app.use(cors())



app.get('/',(req,res)=>{
    res.send(`I am From Render Node Js`)
})

app.listen(process.env.PORT,()=>{
    console.log(`Lisning on PORT : ${process.env.PORT} `)
})