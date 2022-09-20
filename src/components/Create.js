import React, {useState} from "react";
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function Create(){

    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [visitPurpose, setVisitPurpose] = useState("");
    const [date, setDate] = useState("");
    const [visitors, setVisitors] = useState([
        {
            id:"1",
            lastName:"Pepito",
            firstName:"Vienna",
            visitPurpose:"Payment",
            date:"09/19/2022"
    
        },
        {
            id:"2",
            lastName:"Pepito",
            firstName:"Bevien",
            visitPurpose:"Enrol",
            date:"09/25/2022"
    
        },
        {
            id:"3",
            lastName:"Pepito",
            firstName:"Lexus",
            visitPurpose:"Get Grades",
            date:"09/19/2022"
    
        }]);


    const addVisitor = () =>{
        const newVisitor = {
            lastName: lastName,
            firstName: firstName,
            visitPurpose:visitPurpose,
            date:date,
    
        };
    
        setVisitors((prev) => [...prev, newVisitor]);
    }
      return(

        <div className="card">
            <div className="card-header">
            <h1>Add Visitor</h1>
            </div>
            <div className="card-body">
            <Form className="d-grid gap-2">
                <Form.Group className="mb-3" name="LastName">
                    <Form.Control type="text" placeholder="Enter Last Name" required onChange={(e) => setLastName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" name="FirstName">
                    <Form.Control type="text" placeholder="Enter First Name" required onChange={(e) => setFirstName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" name="VisitPurpose">
                    <Form.Control type="text" placeholder="Enter Purpose of Visit" required onChange={(e) => setVisitPurpose(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" name="Date">
                    <Form.Control type="date" placeholder="Enter Date" required onChange={(e) => setDate(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={addVisitor} type="submit">Add</Button>
            </Form>
            </div>
        </div>
      )
}
export default Create;