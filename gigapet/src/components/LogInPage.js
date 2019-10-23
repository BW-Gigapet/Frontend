import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { FormTitle, FieldContainer, FieldLabel, ActualLabel, InputField, LinkButtonDefault, FormButtonContainer, AnimalsImageContainer } from "./FormStyles";

const LogInForm = ({ errors, touched, status, values }) => {
  console.log('props in Login', errors, touched, status)

  //======SET STATE OF DATA TO USE IN POSTING/GETTING (see POST code below)===========
  const [users, setUsers] = useState([]);
  console.log('state in Login Form', users)

  useEffect(() => {
    if (status) {
    setUsers([...users, status]);
    }
  }, [status])
  //======END SET STATE OF DATA TO USE IN POSTING/GETTING===========

  return (
    <div className="logInForm">
      <Form >
        <FormTitle>Log In</FormTitle>
        <FieldContainer className="emailContainer">
        {touched.email && errors.email && <p className="warning">{errors.email}</p>}
            <div className="email">
              <FieldLabel htmlFor="email">
                <ActualLabel>Email</ActualLabel>
              </FieldLabel>
              <div className="emailInputContainer">
                <InputField type="email" name="email" placeholder="Email" size="45"/>
              </div>
            </div>
        </FieldContainer>
        <FieldContainer className="passwordContainer">
        {touched.password && errors.password &&<p className="warning">{errors.password}</p>}
            <div className="password">
              <FieldLabel htmlFor="password">
                <ActualLabel>Password</ActualLabel>
              </FieldLabel>
              <div className="passwordInputContainer">
                <InputField type="password" name="password" placeholder="Password" size="45"/>
              </div>
            </div>
        </FieldContainer>
        <FormButtonContainer className="formButtonContainer">
            <LinkButtonDefault type="submit">Continue</LinkButtonDefault>
        </FormButtonContainer>
      </Form>
        <AnimalsImageContainer className="animalsImageContainer">
            <img
            className="animals"
            src={ require("../assets/Gigapets847by377px.png")}
            alt="animals"
            />
        </AnimalsImageContainer>       
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

handleSubmit(values, {props, setStatus} ) {
  console.log('values', values);
  axios 
    .post("https://bw-gigapet-ft.herokuapp.com/api/login", values)
    .then(res=> {
      localStorage.setItem('token', res.data.token)
      setStatus(res.data);
      props.history.push('/dashboard');
      console.log('this is the response from axios post', res)
    })
    .catch(error => console.log(error.res))
},

//======END POST REQUEST==========

})(LogInForm);

export default FormikLogInForm;