const {Router} = require("express");
const {addTopic,updateTopic,deleteTopic} = require("../controllers/topicController");
const topicRouter = Router();

topicRouter.post("/add",async(req,res) =>{
    try {
        if(!req.isAuth && req.access !== "admin")throw new Error("Unauthenticated")
        const data = await addTopic(req)
    } catch (error) {
        res.send({error:error.message})
    }
})



topicRouter.patch("/:topicId",async(req,res) =>{
    try {
        if(!req.isAuth && req.access !== "admin")throw new Error("Unauthenticated")
        const data = await updateTopic(req)
    } catch (error) {
        res.send({error:error.message})
    }
})

topicRouter.delete("/:topicId",async(req,res) =>{
    try {
        if(!req.isAuth && req.access !== "admin")throw new Error("Unauthenticated")
        const data = await deleteTopic(req)
    } catch (error) {
        res.send({error:error.message});
    }
})
module.exports = topicRouter