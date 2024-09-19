
const mongoose=require("mongoose")
const { type } = require("os")

const storySchema= new mongoose.Schema({


    name:{
        type:String
    },
    story:{
        type:String

    }




})

const Story=mongoose.model("Story",storySchema)

module.exports=Story