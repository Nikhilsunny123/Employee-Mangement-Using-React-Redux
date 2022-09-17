import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import { useNavigate } from "react-router-dom";
import './Login.css';

import { useDispatch } from "react-redux";
import { loginAction } from "../features/Login";

function Login() {
  const navigate=useNavigate();

  const validation = Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });

  const dispatch=useDispatch();
 
  return (
    <div>
         <Formik
            validationSchema={validation}
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              console.log(values);
             
              const submit={
                isLogin:true,
                email:values.email
              };
             
               dispatch(loginAction(submit));
               
             
               navigate.push("/");
              }
            }
        >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
         
        }) => (
          <div className="login">
            <div className="form">

              <form noValidate  onSubmit={handleSubmit}>
                <span>LOGIN</span><br/>
         
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id "
                  
                  id="email"
                />

                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  
                />
                
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
               
                <button type="submit">Login </button>

             
              </form>
            </div>
          </div>
        )}
        </Formik>
    </div>
  )
}

export default Login

