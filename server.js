const express = require("express");
const app = express();
const port= 3002;
const productRoute=require("./src/product/routes_product");
// const router = require("../Student/routes");


app.use(express.json());

app.get("/",(req,res)=>{
    res.send("welcome to product database");
});

app.use("/api/v1/product",productRoute);

app.listen(port,()=>console.log(`product database using port ${port}`));
