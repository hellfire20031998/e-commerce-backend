const express= require("express");
const studentRoutes= require("./routes");
const app = express();
const port= 3001;


app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello World!");
});

app.use("/api/v1/students", studentRoutes);

app.listen(port,()=> console.log(` new app listening on port ${port}`));