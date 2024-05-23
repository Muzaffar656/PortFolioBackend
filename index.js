const express = require('express')

const app = express()



app.get('/',(req,res)=>{
    res.send(`I am From Render`)
})

app.listen(6000,()=>{
    console.log("Lisning on PORT : 6000 ")
})