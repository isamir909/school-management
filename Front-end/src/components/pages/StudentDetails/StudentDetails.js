import { useState } from "react"



const StudentDetails=()=>{

    const[newStudent,setNewStudent]=useState("")
    const [getStudent,setGetStudent]=useState([])
    const displayInput=()=>{
    
    }
    return (
        <div>
            <p>Many students </p>
            {/* search bar */}
            <h3>Search student </h3>
            <input type={"text"} placeholder="Enter Student name or subject name"></input>
            <button>Search</button>
            <br/>
            <br/>
            
            <button type="button" onClick={displayInput}>Add Student</button>
        </div>
    )
}

export default StudentDetails