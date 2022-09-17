import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import Employee from './Employee';
import { selectEmployee } from '../features/Employee';
import { connect } from 'react-redux';


import Button from 'react-bootstrap/Button';

import Table from 'react-bootstrap/Table';

import './Employeelist.css'


function EmployeeList({employeeList}) {


  //used for calling action
  const dispatch = useDispatch();

  // add employees state to employeelist .same as maptostateProps
  // const employeeList = useSelector((state) => state.employees.value);

  // console.log(employeeList);


  return (
            <>
            <div className='mainEmployeeComponent'>
              <Link to="/createemployee"><Button className=' button mt-6 '>Add New Employee</Button></Link> 
                  <div className='components'>
                    <div className='employeelist'>  
                      <h2 className="m-3 ">Employee List</h2>

                        <Table className='cards'   striped bordered hover>
                            <thead >
                              <tr >
                              <th>Employee id</th>
                                <th>Employee Name</th>
                                <th> Email</th>
                              </tr>
                            </thead>

                            <tbody>
                            {employeeList.map((employee)=>{
                              return(
                              
                                  <tr onClick={()=>dispatch(selectEmployee(employee))}>
                                    <td>{employee.id}  </td>
                                    <td>{employee.employeeName}  </td>
                                    <td>{employee.employeeEmail}</td>
                                    
                                  </tr>


                                )
                                    })}
                        </tbody>
                          
                        </Table>

                  
                        </div>

               <div className='employee'>
                 <Employee/>
                </div>
          
             
              </div>
          </div>

          </>
          
                
           
           
     
      
      

  )
}

const mapStateToProps=(state)=>{
  console.log(state);
  return {
    employeeList:state.employees.value
  }
}

export default connect(mapStateToProps,{selectEmployee}) (EmployeeList)



// update and delete
 {/* <div>
              <input
                type="text"
                placeholder="New Employee name..."
                onChange={(event) => {
                  setNewEmployeeName(event.target.value);
                }}
              />
              <input
                type="text"
                placeholder="New Employee email..."
                onChange={(event) => {
                  setNewEmployeeEmail(event.target.value);
                }}
              /> */}
              {/* <input
                type="text"
                placeholder="New Employee DOB..."
                onChange={(event) => {
                  setNewEmployeeDOB(event.target.value);
                }}
              /> */}
              {/* <button
                onClick={() => {
                  dispatch(
                    updateEmployee({ id: employees.id,employeeName: newEmployeeName,
                      employeeEmail: newEmployeeEmail})
                  );
                }}
              >
                {" "}
                Update Employee
              </button>
              </div>


            
              <button onClick={() => {
                  dispatch(deleteEmployee({ id: employees.id }));
                }}>Delete</button>
           
              <div> */}