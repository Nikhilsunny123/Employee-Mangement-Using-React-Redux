import { connect } from 'react-redux';
import React from 'react';


 import { Outlet, Link } from "react-router-dom";
import Navigationbar from '../components/Navigationbar';
import Sidebar from '../components/Sidebar';


const Dashboard = () => {
  return (

  <>
  
      
    <body className='body'>
    <Navigationbar />
      <Sidebar/>
       
      </body>

        <Outlet />

    </>
  )
};

// const mapStateToProps=({login:{isLogin}})=>({
//   isLogin,
// })

export default Dashboard;