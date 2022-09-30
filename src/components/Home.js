import React, {useState} from "react";
import {Button, Table, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function Home(){
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

        const handleDelete = (id ) => {
            setVisitors(visitors.filter(i => i.id !== id));
          
        };

        const handleSubmit = () =>{
            const newVisitor = {
                lastName: lastName,
                firstName: firstName,
                visitPurpose: visitPurpose,
                date: date,
            };
            setVisitors((prevState) => [...prevState, newVisitor]);
        }
    
    return(
        <div className="row m-5">
             <div className="card col-md-4 bg-dark shadow-lg p-3 mb-5 bg-body rounded">
            <div className="card-header">
            <h1>Add Visitor</h1>
            </div>
            <div className="card-body">
            <Form className="d-grid gap-2">
                <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Control type="text" placeholder="Last Name" required onChange={(e) => setLastName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formFirstName">
                    <Form.Control type="text" placeholder="First Name" required onChange={(e) => setFirstName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formVisitPurpose">
                    <Form.Control type="text" placeholder="Purpose of Visit" required onChange={(e) => setVisitPurpose(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDate">
                    <Form.Control type="date" placeholder="Date" required onChange={(e) => setDate(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={handleSubmit}>Add</Button>
            </Form>
            </div>
        </div>
        <div className="col-md-8">
            <Table bordered hover size="sm" className="border border-dark shadow-lg p-3 mb-5 bg-body rounded">
                <thead>
                    <tr>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Purpose of Visit</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    visitors.map((visitor, ids)=>{
                        return(
                            <tr key={ids}>
                                <td>{visitor.lastName}</td>
                                <td>{visitor.firstName}</td>
                                <td>{visitor.visitPurpose}</td>
                                <td>{visitor.date}</td>
                                <td><Button onClick={() => handleDelete(visitor.id)}>Delete</Button></td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </Table>
            </div>
        </div>
    )
}
 export default Home;