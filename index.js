const express = require('express')
require('dotenv').config()
const app = express()



app.get('/',(req,res)=>{
    res.send(`I am From Render`)
})

app.listen(process.env.PORT,()=>{
    console.log(`Lisning on PORT : ${process.env.PORT} `)
})