const express =  require("express")
const app = express();
const morgan = require("morgan");

//setting
app.set("port", process.env.PORT || 80)
app.set("json spaces",2 )

//middlewares
app.use(morgan("dev"))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//routes
app.use(require("./routes/index"))
app.use("/api/pokemon",require("./routes/pokemon"))
// starting server
app.listen(app.get("port"),()=>{
    console.log(`Server on port ${app.get("port")}`)
})