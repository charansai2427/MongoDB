const {Topics} = require("../mongoConfig")
const mongoDb = require("mongodb")

const addTopic = async (req) =>{
    const topicData = await Topics.insertOne({
        name:req.body.name,
        duration:req.body.duration,
        vedio:req.body.vedio,
        description:req.body.description,
    });
    const topicId = topicData.insertedId.toString();
    const courseId = new mongoDb.ObjectId(req.body.courseId);
    return Courses.findOneAndUpdate({_id:courseId},{
        $push:{
            curriculum:topicId
        }
    });
}

const updateTopic = async(req)=>{
    const topicId = new mongoDb.ObjectId(req.params.topicId);
    return Topics.findOneAndUpdate({_id:new mongoDb.ObjectId(req.params.topicId)})
}

const deleteTopic = async(req)=>{
    const topicId = new mongoDb.ObjectId(req.params.topicId);
    return Topics.findOneAndDelete({_id:new mongoDb.ObjectId(req.params.topicId)})
}
module.exports = {addTopic}