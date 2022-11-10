const mongoose = require("mongoose");
const ObjectId=mongoose.Schema.Types.ObjectId


const studentSchema = new mongoose.Schema({

    name:{ type: String, trim: true,lowercase:true },

    subject:{
      Maths:  { type: Number, trim: true,lowercase:true,default:0},
      Physics:  { type: Number, trim: true,lowercase:true,default:0 },
      Chemistry:  { type: Number, trim: true,lowercase:true,default:0 }
    },
    isDeleted:{type:Boolean,default:false},
    // took subject as  object for future expansion 
    teacherId:{type:ObjectId,required:true}

}, { timestamps: true });





module.exports = mongoose.model("student", studentSchema);

