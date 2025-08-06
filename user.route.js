import express from "express"

const userRoute = express.Router()

const data= [
        {id:1,name:"pepe",},
        {id:2,name:"papo",}
    ]


userRoute.get("/",(req, res)=>{
    res.send(JSON.stringify(data))
})

userRoute.get("/:id",(req, res)=>{
    res.send(JSON.stringify(data.filter(dat => dat.id == req.params.id)[0]))
})

export default userRoute