import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button ,Form } from 'react-bootstrap';
import BaseApp from '../Core/BaseApp';


function AddTeacher() {
    const navigate = useNavigate();
    const [Teacher, setTeachers] = useState({
        id: "",
        name: "",
        email: "",
        mobile: "",
        sessionTimings: ""

    })
    const handleSubmit = (event) => {
        event.preventDefault();

        const postData = async () => {
            try {
                const res = await axios.post(`https://6422c59d77e7062b3e2237e0.mockapi.io/Teachers`, Teacher);
                setTeachers(res.data);
                alert("Data Created successfully")
                navigate('/teachers')

            } catch (error) {
                console.log(error)
            }
        }
        postData();
    }

    return (
        <BaseApp
            title='Add New Teachers'>

            <div className='Addform'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter ID"
                            onChange={e => setTeachers({ ...Teacher, id: e.target.value })} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name"
                            onChange={e => setTeachers({ ...Teacher, name: e.target.value })} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email"
                            onChange={e => setTeachers({ ...Teacher, email: e.target.value })} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type="text" placeholder="Enter Mobile Number"
                            onChange={e => setTeachers({ ...Teacher, mobile: e.target.value })} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>sessionTimings</Form.Label>
                        <Form.Control type="text" placeholder="Enter sessionTimings"
                            onChange={e => setTeachers({ ...Teacher, sessionTimings: e.target.value })} />
                    </Form.Group>

                    <Button className='addsubmit' variant="primary" onClick={handleSubmit}
                    >Add Submit</Button>
                </Form>
            </div>


        </BaseApp>
    )
}

export default AddTeacher