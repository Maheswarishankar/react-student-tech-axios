import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import BaseApp from '../Core/BaseApp';


function Student() {

  const [students, setStudents] = useState([]);
  let navigate = useNavigate();

  let handleDelete = async (id) => {
    try {
      let res = await axios.delete(`https://6422c59d77e7062b3e2237e0.mockapi.io/Students/${id}`)
      if (res.status === 200) {
        getData()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getData = async () => {
    try {
      const res = await axios.get(`https://6422c59d77e7062b3e2237e0.mockapi.io/Students`);
      setStudents(res.data);

    } catch (error) {
      console.log(error)

    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <BaseApp
      title='Student Data'>
      <div className='container-fluid'>
      <Button variant='primary' className='add-btn' onClick={() => navigate(`/add/students`)}>
                      <i className="fas fa-pen-to-square"></i>Create New student</Button>
                    &nbsp;&nbsp; &nbsp;

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>DOB</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              students.map((e) => {
                return <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.mobile}</td>
                  <td>{e.DOB}</td>
                  <td>

                    <Button variant='primary' onClick={() => navigate(`/edit-teach/${e.id}`)}>
                      <i className="fas fa-pen-to-square"></i> Edit</Button>
                    &nbsp;&nbsp; &nbsp;                  

                    <Button variant='danger' onClick={() => handleDelete(e.id)}>
                      <i className="fas fa-trash"></i> Delete</Button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </Table>

      </div>
    </BaseApp>
  )
}

export default Student