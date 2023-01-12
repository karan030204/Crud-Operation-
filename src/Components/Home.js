import React, { Fragment } from 'react'
import { Button,Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employees';
import { Link, useNavigate } from 'react-router-dom';

function Home() {

    let history = useNavigate();

    //for handling the edit button
    const handleEdit = (id, name, age) => {
        localStorage.setItem('Name',name);
        localStorage.setItem('Age',age);
        localStorage.setItem('id',id);
    }

    //For handling Delete button
    const handleDelete = (id) => {
        var index = Employees.map(function(e){
            return e.id
        }).indexOf(id);

        //Used for Deleting the Element
        //spice has two arguments jahan se woh start hoga remove krna and second argument is for how many elements you want to delete lets say 1 element you want to delete then write one
        Employees.splice(index,1);

        history('/');
        }

        
  return (
    <Fragment>
        <div style={{margin : "10rem"}}>
            <Table striped bordered hover size = "sm">
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Employees && Employees.length > 0
                        ?
                        Employees.map((item) => {
                            return(
                                <tr>
                                    <td>
                                        {item.Name}
                                    </td>
                                    
                                    <td>
                                        {item.Age}
                                    </td>
                                    <td>
                                        <Link to = {'/edit'}>
                                            <Button onClick={() => {
                                                handleEdit(item.id,item.Name,item.Age);
                                            }}>Edit</Button>
                                        </Link>
                                        &nbsp;
                                        <Button onClick={() => {
                                            handleDelete(item.id);
                                        }}>Delete</Button>

                                    </td>
                                </tr>
                            )
                        })
                        :
                        "No data Available"
                    }
                </tbody>
            </Table>
            <br />

            <Link to="/create" className = "d-grid gap-2">
                <Button size ="large" >Create</Button>
            </Link>
            
        </div>
    </Fragment>
  )
}

export default Home
