import express from "express"
const filesRouter = express.Router()

filesRouter.get("/",async(req,res)=>{
    // create a cache with the files and wallet address
    //  then use the files from their to search upon that
    console.log("consoling")
    const query = req.query
    res.send(query)
})

export default filesRouter