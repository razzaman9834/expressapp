const express = require('express');

const app = express();
let PORT =3000;
app.get('/',(req,res)=>{
    res.send("Code Up");
})

app.listen(PORT , ()=>{
    console.log("Up and running on PORT 3000")
})