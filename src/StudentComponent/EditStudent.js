import React,{useEffect, useState} from 'react'
import BaseApp from '../Core/BaseApp'
import { Button,Form } from 'react-bootstrap'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function EditStudent() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [students, setStudents] = useState({
    id: id,
    name: "",
    email: "",
    mobile: "",
    DOB: ""

  })

  const getData = async () => {
    try {
      const res = await axios.get(`https://6422c59d77e7062b3e2237e0.mockapi.io/Students/${id}`);
      setStudents(res.data);

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
        const res = await axios.put(`https://6422c59d77e7062b3e2237e0.mockapi.io/Students/${id}`,students);
        setStudents(res.data);
        alert("Data Updated Successfully")      
        navigate('/students')

      } catch (error) {
        console.log(error)

      }
    }
    UpdateData();
    
  }
  

  return (
    <BaseApp
    title='Edit Students'>
   
   <div className='editform'>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" placeholder="Enter ID"
            value={students.id}
              onChange={e => setStudents({ ...students, id: e.target.value })} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name"
             value={students.name}
              onChange={e => setStudents({ ...students, name: e.target.value })} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email"
             value={students.email}
              onChange={e => setStudents({ ...students, email: e.target.value })} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="text" placeholder="Enter Mobile Number"
             value={students.mobile}
              onChange={e => setStudents({ ...students, mobile: e.target.value })} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>DOB</Form.Label>
            <Form.Control type="text" placeholder="Enter DOB"
             value={students.DOB}
              onChange={e => setStudents({ ...students, DOB: e.target.value })} />
          </Form.Group>

          <Button className='editsubmit' variant="primary" onClick={handleSubmit}
          >Update</Button>
        </Form>
      </div>
   
    </BaseApp>
  )
}




export default EditStudent