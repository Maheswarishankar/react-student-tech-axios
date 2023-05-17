
import { useState,useEffect } from 'react';
import React from 'react'
import { Button ,Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BaseApp from '../Core/BaseApp';



function EditTeacher() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [Teacher, setTeachers] = useState({
      id: id,
      name: "",
      email: "",
      mobile: "",
      sessionTimings: ""
  
    })
  
    const getData = async () => {
      try {
        const res = await axios.get(`https://6422c59d77e7062b3e2237e0.mockapi.io/Teachers/${id}`);
        setTeachers(res.data);
  
      } catch (error) {
        console.log(error)
  
      }
    }
    useEffect(() => {
      getData()
    }, [])
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const UpdateData = async () => {
        try {
          const res = await axios.put(`https://6422c59d77e7062b3e2237e0.mockapi.io/Teachers/${id}`,Teacher);
          setTeachers(res.data);
          alert("Data Updated Successfully")      
          navigate('/teachers')
  
        } catch (error) {
          console.log(error)  
        }
      }
      UpdateData();     
    }
    
  
  return (
    <BaseApp
    title='Edit Teachers'>
   
   <div className='editform'>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" placeholder="Enter ID"
            value={Teacher.id}
              onChange={e => setTeachers({ ...Teacher, id: e.target.value })} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name"
             value={Teacher.name}
              onChange={e => setTeachers({ ...Teacher, name: e.target.value })} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email"
             value={Teacher.email}
              onChange={e => setTeachers({ ...Teacher, email: e.target.value })} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="text" placeholder="Enter Mobile Number"
             value={Teacher.mobile}
              onChange={e => setTeachers({ ...Teacher, mobile: e.target.value })} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>sessionTimings</Form.Label>
            <Form.Control type="text" placeholder="Enter DOB"
             value={Teacher.sessionTimings}
              onChange={e => setTeachers({ ...Teacher, sessionTimings: e.target.value })} />
          </Form.Group>

          <Button className='editsubmit' variant="primary" onClick={handleSubmit}
          >Update</Button>
        </Form>
      </div>
   
    </BaseApp>
   
    
  )
}

export default EditTeacher