import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import { loginAction } from '../features/Login';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';

import Navbar from 'react-bootstrap/Navbar';



const Navigationbar = (loginStatus) => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const navigateToEmployeeList = () => {
    // 👇️ navigate to /empoyeeList
    dispatch(loginAction(false));
    navigate('/login');
  };

 
  return ( 

    
    <Navbar bg="primary">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          {/* <Link to="/login">Login</Link> */}


            {loginStatus ?
              <>
              <Button className='btn btn-primary' onClick={navigateToEmployeeList}
               >
                 LogOut
               </Button>
               
             </>
           :
            
            ""
            
          }
             
          
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
const mapStateToProps=(state)=>{
  console.log(state);
  return {
    loginStatus:state.login.value,
  
  }
}


export default connect (mapStateToProps,{loginAction})(Navigationbar);


