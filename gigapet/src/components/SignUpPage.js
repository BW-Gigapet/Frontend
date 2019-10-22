import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { FormTitle, FieldContainer, FieldLabel, ActualLabel, InputField, LinkButtonDefault, FormButtonContainer, AnimalsImageContainer } from "./FormStyles";

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
        <FormTitle>Sign Up</FormTitle>
        <FieldContainer className="usernameContainer">
        {touched.username && errors.username && <p className="warning">{errors.username}</p>}
            <div className="username">
              <FieldLabel htmlFor="username">
                <ActualLabel>User Name</ActualLabel>
              </FieldLabel>
              <div className="usernameInputContainer">
                <InputField type="text" name="username" placeholder="User Name" size="45"/>
              </div>
            </div>
        </FieldContainer>
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
      props.history.push('/kidsprofilesetup');
    })
    .catch(error => console.log(error.response))
},

//======END POST REQUEST==========

})(SignUpForm);

export default FormikSignUpForm;