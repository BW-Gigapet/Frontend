import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios';

const SignUpForm = ({ errors, touched, status }) => {

  //======SET STATE OF DATA TO USE IN POSTING/GETTING (see POST code below)===========
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (status) {
    setUsers([...users, status]);
    }
  }, [status])
  //======END SET STATE OF DATA TO USE IN POSTING/GETTING===========

  return (
    <div className="signUpForm">
      <Form >
        <h2>Sign Up</h2>
        <div className="usernameContainer">
        {touched.username && errors.username && <p className="warning">{errors.username}</p>}
            <div className="username">
              <label htmlFor="username">
                <p>User Name</p>
              </label>
              <div className="usernameInputContainer">
                <Field type="text" name="username" placeholder="User Name" size="45"/>
              </div>
            </div>
        </div>
        <div className="emailContainer">
        {touched.email && errors.email && <p className="warning">{errors.email}</p>}
            <div className="email">
              <label htmlFor="email">
                <p>Email</p>
              </label>
              <div className="emailInputContainer">
                <Field type="email" name="email" placeholder="Email" size="45"/>
              </div>
            </div>
        </div>
        <div className="passwordContainer">
        {touched.password && errors.password &&<p className="warning">{errors.password}</p>}
            <div className="password">
              <label htmlFor="password">
                <p>Password</p>
              </label>
              <div className="passwordInputContainer">
                <Field type="password" name="password" placeholder="Password" size="45"/>
              </div>
            </div>
        </div>
        <button type="submit">Continue</button>
      </Form>
      <div className="animalsImageContainer">
            <img
            className="animals"
            src={ require("../assets/Gigapets900px.png")}
            alt="animals"
            />
        </div>       
    </div>
  );
}

const FormikSignUpForm = withFormik({

//=============Initializing Form's Empty State==================
mapPropsToValues({ username, email, password }) {
    return {
        username: username || "",
        email: email || "",
        password: password || "",
    };
},
//=============End Initializing Form's Empty State==================

//======VALIDATION SCHEMA==========
validationSchema: Yup.object().shape({
    username: Yup.string()
        .min(2, "You must enter 2 or more letters!")
        .required("Name is required!"),
    email: Yup.string()
        .email("Email not valid.")
        .required("Email is required!"),
    password: Yup.string()
        .min(6, "Password must be 6 characters or longer!")
        .required("Password is required!"),        
}),
//======END VALIDATION SCHEMA==========

//======POST REQUEST (see how status is set above)==========

handleSubmit(values, {props, setStatus} ) {
  console.log('values', values);
  axios
    .post("https://bw-gigapet-ft.herokuapp.com/api/register", values)
    .then(response => {
      setStatus(response.data);
      console.log(response)
    })
    .catch(error => console.log(error.response))
},

//======END POST REQUEST==========

})(SignUpForm);

export default FormikSignUpForm;