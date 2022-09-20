import React from 'react'
import { useState } from 'react';
import { selectEmployee, updateEmployee ,editForm} from '../features/Employee';
import {useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./UpdateEmployee.css"


function UpdateEmployee({updateEmployees}) {

    const dispatch = useDispatch();

    // add employees state to employeelist .same as maptostateProps
    // const updateEmployees = useSelector((state) => );
  

    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const updateEmployeeDetails=()=>{
      dispatch(
        updateEmployee({ id: updateEmployees.id,employeeName: newEmployeeName,
          employeeEmail: newEmployeeEmail,employeeDOB: newEmployeeDOB,employeeImage:newEmployeeImage})
      );
      dispatch(selectEmployee({ id: updateEmployees.id,employeeName: newEmployeeName,
        employeeEmail: newEmployeeEmail,employeeDOB: newEmployeeDOB,employeeImage:newEmployeeImage}));
                     
        dispatch(editForm({ edit:false}));
     
    }
        
    const[newEmployeeName,setNewEmployeeName]=useState(updateEmployees.employeeName);
    const [newEmployeeEmail, setNewEmployeeEmail] = useState(updateEmployees.employeeEmail);
    const [newEmployeeDOB, setNewEmployeeDOB] = useState(updateEmployees.employeeDOB);
    const [newEmployeeImage, setNewEmployeeImage] = useState(updateEmployees.employeeImage);

  return (
    <div>

            <h4>Update Employee</h4>
             <input className=' '
              type="text"
              value={newEmployeeName}
              placeholder="New Employee name..."
              onChange={(event) => {
                setNewEmployeeName(event.target.value);
              }}
           
            /><br/>
            <input className=''
              type="email"
              placeholder="email..."
              value={newEmployeeEmail}
              onChange={(event) => {
                setNewEmployeeEmail(event.target.value);
              }}
            
            /><br/>
            <input className=''
              type="date"
              value={newEmployeeDOB}
              placeholder="New Employee DOB..."
              onChange={(event) => {
                setNewEmployeeDOB(event.target.value);
              }}
          
            /><br/>
            <input className='mt-2'
              type="text"
              value={newEmployeeImage}
              placeholder="New Employee Image.."
              onChange={(event) => {
                setNewEmployeeImage(event.target.value);
              }}
          
            /><br/>

            <Button className='mt-2' variant="primary" onClick={handleShow}>
                Update Employee
             </Button>
             <Button onClick={() => {
                          
                          dispatch(editForm({ edit:false}));
                        }} 
                 className='mt-2' variant="primary" >
                Cancel
             </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Confirm Update</Modal.Title>
                </Modal.Header>
                
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary"  
                    onClick={updateEmployeeDetails}
                    >
                    Confirm
                </Button>
                </Modal.Footer>
            </Modal>
            
    </div>
  )
}

const mapStateToProps=(state)=>{
  console.log(state);
  return {
    updateEmployees:state.employees.selectedEmployee,
    editPage:state.employees.edit,
  }
}

export default connect(mapStateToProps,{updateEmployee,selectEmployee,editForm}) (UpdateEmployee);

