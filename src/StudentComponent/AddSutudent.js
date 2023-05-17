import React, { useState } from 'react'
import BaseApp from '../Core/BaseApp'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



function AddSutudent() {
  const navigate = useNavigate();
  const [students, setStudents] = useState({
    id: "",
    name: "",
    email: "",
    mobile: "",
    DOB: ""

  })
  const handleSubmit = (event) => {
    event.preventDefault();

    const postData = async () => {
      try {
        const res = await axios.post(`https://6422c59d77e7062b3e2237e0.mockapi.io/Students`, students);
        setStudents(res.data);
        alert("Data created successfully")
        navigate('/students')
      } catch (error) {
        console.log(error)
      }
    }
    postData();
  }

  return (
    <BaseApp
      title='Add New Students'>

      <div className='Addform'>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" placeholder="Enter ID"
              onChange={e => setStudents({ ...students, id: e.target.value })} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name"
              onChange={e => setStudents({ ...students, name: e.target.value })} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email"
              onChange={e => setStudents({ ...students, email: e.target.value })} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="text" placeholder="Enter Mobile Number"
              onChange={e => setStudents({ ...students, mobile: e.target.value })} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>DOB</Form.Label>
            <Form.Control type="text" placeholder="Enter DOB"
              onChange={e => setStudents({ ...students, DOB: e.target.value })} />
          </Form.Group>

          <Button className='addsubmit' variant="primary" onClick={handleSubmit}
          >Add Submit</Button>
        </Form>
      </div>
    </BaseApp>
  )
}

export default AddSutudent