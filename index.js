let express = require("express");
let app = express();

let signs = {
    "data":[
        {
            name:"aries",
            info:"they are troublesome."
        },
    
        {
            name:"sag",
            info:"they are the best."
        }
    ]
}

// app.get("/",(req,res)=>{
//    res.send("this is root name");
// })

app.use('/', express.static('public'))

app.use('about',(req,res)=>{
    res.send("this is the page that will contain info about the project");
})

app.get('/signs',(req,res)=>{
    res.json(signs);
})

app.get('/signs/:sign',(req,res)=>{
    console.log(req.params.sign);
    let user_sign = req.params.sign;
    let user_obj;
    for(let i=0;i<signs.data;i++){ 
        if(user_sign ==signs.data[i].name){
            user_obj = signs.data[i];
        }
    }
    console.log(user_obj);
    if(user_obj){
        res.json(user_obj);
    }else{
        res.json({status:"not found"});
    }

})

app.listen(2400,()=>{
    console.log("listening!");
})