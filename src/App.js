import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Components/Home';
import Student from './StudentComponent/Student';
import Teacher from './TeacherComponent/Teacher';
import AddSutudent from './StudentComponent/AddSutudent';
import EditStudent from './StudentComponent/EditStudent';
import AddTeacher from './TeacherComponent/AddTeacher';
import EditTeacher from './TeacherComponent/EditTeacher';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route path="/home" element={<Home />}>
          </Route>
          <Route path="/students" element={<Student />}>
          </Route>
          <Route path="/add/students" element={<AddSutudent />}>

          </Route>
          <Route path="/edit/:id" element={<EditStudent />}>

          </Route>
          <Route path="/teachers" element={<Teacher />}>
          </Route>

          <Route path='/add/teachers' element={<AddTeacher />}>
          </Route>
          
          <Route path ='/editteacher/:id' element={<EditTeacher/>}>

          </Route>

          


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
