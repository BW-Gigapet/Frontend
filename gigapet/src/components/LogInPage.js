import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const LogInForm = ({ errors, touched, status, values }) => {

  //======SET STATE OF DATA TO USE IN POSTING/GETTING (see POST code below)===========
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (status) {
    setUsers([...users, status]);
    }
  }, [status])
  //======END SET STATE OF DATA TO USE IN POSTING/GETTING===========
  
  return (
    <div className="logInForm">
      <Form >
        <h2>Log In</h2>
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

const FormikLogInForm = withFormik({

mapPropsToValues({ email, password }) {
    return {
        email: email || "",
        password: password || "",
    };
},

//======VALIDATION SCHEMA==========
validationSchema: Yup.object().shape({
    email: Yup.string()
        .email("Email not valid.")
        .required("Email is required!"),
    password: Yup.string()
        .required("Password is required!"),        
}),
//======END VALIDATION SCHEMA==========

//======POST REQUEST (see how status is set above)==========

handleSubmit(values, {setStatus} ) {
  console.log('values', values);
  axios .post("https://bw-gigapet-ft.herokuapp.com/api/login", values)
        .then(response => {
          setStatus(response)
          console.log(response)
        })
        .catch(error => console.log(error.response))
},

//======END POST REQUEST==========

})(LogInForm);

export default FormikLogInForm;