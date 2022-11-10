const express=require("express")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const route=require("./route/route")
const app=express()
const cors=require("cors")


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const clusterLink="mongodb+srv://samirlohiya909:Lohiya123@samirlohiya.nszppy8.mongodb.net/school-management?retryWrites=true&w=majority"
mongoose.connect(clusterLink,{useNewUrlParser:true})
.then(()=>console.log("MongoDB is connected"))
.catch(err=>console.log(err))


app.use("/",route)

app.listen(process.env.PORT ||3001,function(){
    console.log('Express app running on port ' + (process.env.PORT || 3001))
})