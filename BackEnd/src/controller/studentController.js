const studentModel = require("../model/studentModel");
const teacherModel = require("../model/teacherModel");
const validation = require("../validation/validation");
const validator = require("validator");




const addStudent = async function (req, res) {
  try {
    let { name, subject } = req.body;
    const teacherID = req.body.teacherId;
    let { Maths, Physics, Chemistry } = subject;

    if (!validation.isValid(name)) {return res.status(400).send({ status: false, message: "name is required" })}
   
    if (!validator.isAlpha(name.trim()))return res.status(400).send({ status: false, msg: "name must be between a-z or A-Z" });

    if (typeof subject !== "object") {return res.status(400).send({status: false,
          message: "subject must me in the form of object"});
    }

    let getStudent = await studentModel.findOne({
      teacherId: teacherID,
      name: name,
      isDeleted: false,
    });

    // if data found then update it

    if (getStudent) {
      getStudent = getStudent.toObject();

     
      if (Maths) {
        getStudent.subject.Maths += Maths;
      }

      if (Physics) {
        getStudent.subject.Physics += Physics;
      }

      if (Chemistry) {
        getStudent.subject.Maths += Chemistry;
      }

     
      const updateData = await studentModel.findOneAndUpdate(
        { _id: getStudent._id.toString() },
        { $set: { subject: getStudent.subject },
         new: true }
      );

      return res.status(200).send({status: true,message: "data created successfully",data: updateData});}

    // if data not found
    if (!getStudent) {
      let createData = await studentModel.create({
        name,
        subject,
        teacherId: teacherID,
      });
      return res
        .status(201)
        .send({
          status: true,
          message: "data created successfully",
          data: createData,
        });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ status: false, message: error.message });
  }
};

const updateStudent = async function (req, res) {
   try {
    let studentID=req.params.studentId
    let { name, subject } = req.body;
    const teacherID = req.body.teacherId;
    let data={}
    
    let getStudent = await studentModel.findOne({ teacherId: teacherID,_id:studentID, isDeleted: false })
    if (!getStudent) {return res.status(404).send({ status: false, message: "student not found" })}
    getStudent=getStudent.toObject()

    

    if (name) {
      if(!validator.isAlpha(name.trim()))return res.status(400).send({ status: false, msg: "name must be between a-z or A-Z" });
      data.name=name
    }

    if (subject) {
      if (typeof subject !== "object") {return res.status(400).send({status: false,message: "subject must me in the form of object"})}
    }
  
    if(subject.Maths !==undefined){getStudent.subject.Maths=subject.Maths}
    if(subject.Physics!==undefined){getStudent.subject.Physics=subject.Physics}
    if(subject.Chemistry!==undefined){getStudent.subject.Chemistry=subject.Chemistry}
    data.subject=getStudent.subject
    console.log(data);
    let updateData = await studentModel.findOneAndUpdate({ teacherId: teacherID,_id:studentID, isDeleted: false},{$set:data},{new:true})
    return res.status(200).send({ status: true, message: "data updated successfully", updateData });

   } catch (error) {
    console.log(error);
    return res.status(500).send({ status: false, message: error.message });
   }
};

const deleteStudent=async function(req,res){
    try {
        let studentID=req.params.studentId
        let deleteStudent=await studentModel.findOneAndUpdate({_id:studentID},{$set:{isDeleted:true}})
        return res.status(204).send()

    } catch (error) {
        console.log(error);
    return res.status(500).send({ status: false, message: error.message });
    }
}

const getStudent=async function(req,res){
    try {
           let  query=req.query
           const teacherID = req.body.teacherId;
           let findData={isDeleted:false,teacherId:teacherID}
            if(query.name){
                findData.name=query.name
            }
        let getAllData=await studentModel.find(findData)
        return res.status(200).send({status:true,data:getAllData})

    } catch (error) {
        console.log(error);
        return res.status(500).send({ status: false, message: error.message });
        
    }
}





module.exports = { addStudent, updateStudent,deleteStudent,getStudent };

