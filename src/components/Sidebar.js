import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'


const Sidebar = () => {
  return (
 

  <div className='sidebar'>
    <a ><Link to="/"> Home</Link></a>
    <a ><Link to="/employeeList"> Employees</Link></a>
    <a ><Link to="/employeeList"> Contact</Link></a>
    <a ><Link to="/employeeList"> More</Link></a>
  </div>
  )
}

export default Sidebar