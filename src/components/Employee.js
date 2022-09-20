import React from 'react'
import { useState } from 'react';
import { connect } from 'react-redux';

import { useDispatch } from "react-redux";


import {deleteEmployee, updateEmployee} from '../features/Employee';
import { editForm } from '../features/Employee';
import { selectEmployee } from '../features/Employee';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';


import Modal from 'react-bootstrap/Modal';
import UpdateEmployee from './UpdateEmployee';



function Employee({selectEmp,editPage}) {

  const dispatch = useDispatch();





  // const selectEmployee = useSelector((state) => state.employees.selectedEmployee);


  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteEmp=()=>{
    dispatch(deleteEmployee({ id: selectEmp.id }));
      dispatch(selectEmployee(null));
      handleClose();
  }

  return (
      
          <div className='employeeDetails'>
              
                  { selectEmp && 
                  
                  <div>
                    {editPage.edit ?

                    <UpdateEmployee/>
                     
                      :
                      <div>
                      <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={selectEmp.employeeImage} />
                      <Card.Body>
                        <Card.Title>Employee details</Card.Title>
                        
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroup.Item>Name :{selectEmp.employeeName}</ListGroup.Item>
                        <ListGroup.Item>Email :{selectEmp.employeeEmail}</ListGroup.Item>
                        <ListGroup.Item>Date Of Birth :{selectEmp.employeeDOB}</ListGroup.Item>
                      </ListGroup>
                    
                    </Card>
                  
                  <Button className='mt-2' variant="primary" onClick={handleShow}>
                    delete
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Confirm delete</Modal.Title>
                      </Modal.Header>
                      
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        
                        <Button variant="primary"  onClick={deleteEmp}>
                          Confirm
                        </Button>
                      </Modal.Footer>
                    </Modal>
                        
                    <Button  onClick={() => {
                          
                          dispatch(editForm({ edit:true}));
                        }} 
                            className='mt-2' variant="primary" >
                      Edit
                    </Button>
                    </div>
        
                      
                        }
                    
              </div>
       
   }


</div>

   
    )
  
}


const mapStateToProps=(state)=>{
  console.log(state);
  return {
    selectEmp:state.employees.selectedEmployee,
    editPage:state.employees.edit,
    employeeList:state.employees.value
  }
}

export default connect(mapStateToProps,{deleteEmployee,editForm,selectEmployee}) (Employee)



