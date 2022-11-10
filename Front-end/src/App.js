import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import NavBar from "./components/NavBar";
import Register from "./components/pages/register/Register"
import Login from "./components/pages/login/Login"
import StudentDetails from './components/pages/StudentDetails/StudentDetails'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
           <NavBar />
        </header>
    
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/:teacherId/studentDetails" element={<StudentDetails />} />
          </Routes>
        {/* </body> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
