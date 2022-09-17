import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


import Dashboard from './pages/Dashboard';

import './App.css';
import Login from './pages/Login';
import EmployeeList from './components/EmployeeList';
import CreateEmployee from './components/CreateEmployee';
import Employee from './components/Employee';



function App() {
  return (
    <>
 
 <BrowserRouter>
        
         <Routes>
            <Route path="/" element={<Dashboard />}>
              <Route path="employeeList" element={<EmployeeList />} />
              <Route path="createemployee" element={<CreateEmployee />} />
              <Route path="employee" element={<Employee />} />

            </Route>
            
            <Route path="login" element={<Login />} />
          </Routes>
          </BrowserRouter>
     
       </>
  );
}

export default App;
