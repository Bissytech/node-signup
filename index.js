const express = require("express")
const app = express()
const ejs = require("ejs")
app.set("view engine","ejs")

   

app.get('/', (request,response)=>{

    response.render("index",{name:"dave"})

})









const port = 2006
app.listen(port,()=>{
console.log(`The port is working at port ${port}`);
})