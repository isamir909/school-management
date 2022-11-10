const express=require("express")
const route=express.Router()
const teacherController=require("../controller/teacherController")
const studentController=require("../controller/studentController")
const authenticate=require("../middleware/authentication")




// teacher registration
route.post("/register/teacher",teacherController.registerTeacher)

// teacher login
route.post("/login/teacher",teacherController.loginTeacher)


// add new student 
route.post("/:teacherId/studentDetails/create",authenticate.authenticate,studentController.addStudent)
 
// update Existing student
route.put("/:teacherId/studentDetails/update/:studentId",authenticate.authenticate,studentController.updateStudent)
// delete student 
route.delete("/:teacherId/studentDetails/delete/:studentId",authenticate.authenticate,studentController.deleteStudent)

route.get("/:teacherId/studentDetails/get",authenticate.authenticate,studentController.getStudent)

module.exports=route