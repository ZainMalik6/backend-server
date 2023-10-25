require('dotenv').config()
const express = require('express')
const app = express()

const port = 4000
// is ki jagga hum env wala port use karege

app.get('/',(req,resp)=>{
    resp.send('Hello Zain')
})


app.get('/login',(req,resp)=>{
    resp.send("Hello User")
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})