import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../features/Employee';
import { connect } from 'react-redux';


function CreateEmployee() {
  const dispatch = useDispatch();
  //  const employeeList = useSelector((state) => state.employees.value);

  const[employeeName,setEmployeeName]=useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeeDOB, setEmployeeDOB] = useState("");
  const [employeeImage, setEmployeeImage] = useState("");

  return (
   <div className='form'>
        
      
      
        <div>
          <h3>Add Employee Form</h3>
      
            <input type="text" 
            placeholder='employee name'  
            onChange={(event) => {
              setEmployeeName(event.target.value);
            }} /><br/>
            <input 
            type="email" 
            placeholder='employee email'  
            onChange={(event) => {
              setEmployeeEmail(event.target.value);
            }}/><br/>
             <input 
            type="date" 
            placeholder='employee date of birth'  
            onChange={(event) => {
              setEmployeeDOB(event.target.value);
            }}/><br/><br/>
             <input 
            type="text" 
            placeholder='employee Image'  
            onChange={(event) => {
              setEmployeeImage(event.target.value);
            }}/><br/><br/>
            {/* <input type="date" placeholder='employee name'  onChange={this.handleChange} /><br/> */}
            <button onClick={(e) => {
              dispatch(
              addEmployee({
                id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
                employeeName,
                employeeEmail,
                employeeDOB,
                employeeImage,
              })
              );
           
            e.preventDefault();
          }} >
            Add
            </button>
        
          
        </div>
      </div>
  )
}
const mapStateToProps=(state)=>{
  console.log(state);
  return {
    employeeList:state.employees.value
  }
}

export default connect(mapStateToProps,{addEmployee}) (CreateEmployee)



// const validation = Yup.object().shape({
//     name: Yup.string()
//     .required("Name is a required field"),
//     email: Yup.string()
//     .required("Email is a required field")
//     .email("Invalid email format"),
//     dateOfBirth: Yup.string()
//       .required("DOB is a required field")
//       ,
      
      
//   });

// const CreateEmployee = () => {
//   return (
//     <>
    
//     <Formik
//         validationSchema={validation}
//         initialValues={{ name: "", email: "",dateOfBirth:"",file : null }}
//         onSubmit={(values) => {
//         console.log(values);
//         }}
//     >
//     {({
//       values,
//       errors,
//       touched,
//       handleChange,
//       handleBlur,
//       handleSubmit,
//     }) => (
//       <div className="Enployee">
//         <div className="form">

//           <form noValidate onSubmit={handleSubmit}>
//             <span>Add New Employee</span><br/>
//             <input
//               type="text"
//               name="name"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.name}
//               placeholder="Enter Name"
              
//               id="name"
//             />
//              <p className="error">
//               {errors.name && touched.name && errors.name}
//             </p>
//             <input
//               type="email"
//               name="email"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.email}
//               placeholder="Enter email id "
              
//               id="email"
//             />

//             <p className="error">
//               {errors.email && touched.email && errors.email}
//             </p>
//             <input 
//              name="dateofbirth" 
//              type="date" 
//              onChange={handleChange}
//              onBlur={handleBlur}
//              value={values.dateOfBirth}
//              placeholder="Enter DOB "/> <br/> <br/>
//             <label style={{color:"blue"}}>Upload Image </label>
//             <input 
//              type="file"
//              name="file"
//              onChange={handleChange}
//              onBlur={handleBlur}
//              value={values.file} />
//              <br/>
            
//             <button type="submit">Add</button>

//           </form>
//         </div>
//       </div>
//     )}
//     </Formik>
// </>
//   )
// }

