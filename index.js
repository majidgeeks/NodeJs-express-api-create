import express from 'express';
import router from './routes/index.js';
import mongoose from './db/index.js';



const app = express();

const PORT = process.env.PORT || 3000;

const db = mongoose.connection;
db.on('error', console.error.bind('connection error:'));
db.once('open', function(){
  console.log("db connected");
});



app.use(express.json());

const middleWare = (req, res, next) => {
    console.log("my middle ware", req.query)
    if(req?.query?.apikey === "1234"){
        next()  
    }else{
        res.status(401).send({message :"not allowed"})
    }
}


app.use("/api", middleWare, router);

// middle ware

// app.get("/users", (req,res) => {
//     res.send(users)
// }
// )

// app.post("/user", (req, res)=> {
//     let {name, email} = req.body;
//     if(name && email){

//         users.push({id : users.length + 1,...req.body});
//         res.status(200).send({status: 200 ,message : "user added successfully"});
//     }
//     else{
//         res.status(403).send({status: 403, message: "name and email is required"}); 
//     }
// })

// app.delete("/user/:id", (req, res) => {
//     let index = users.findIndex(v => v.id === Number(req.params.id));
//     if(index !== -1){

//         users.splice(index, 1);
//     }
//     res.send({message : "user deleted successfully"});

// })

// app.put("/user/:id",(req, res) => {
//     let index = users.findIndex(v => v.id === Number(req.params.id));
//     if(index !== -1){

//         users.splice(index, 1, {id: Number(req.params.id) ,...req.body});
//     }
//     res.send({message : "user updated successfully"});

// })

// making api for place an order

// app.post("/order", (req, res) => {
//     console.log("oder details", req.body);
//     res.send({message: "order placed"});
// })

app.listen(PORT, () => {

    console.log(`server is runnig on port ${PORT}`);
});


