import React, { useState, useEffect } from "react";
import { withFormik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { FormTitle, FieldContainer, FieldLabel, ActualLabel, InputField, LinkButtonDefault, FormButtonContainer, AnimalsImageContainer } from "./FormStyles";

const LogInForm = ({ errors, touched, status, values }) => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (status) {
    setUsers([...users, status]);
    }
  }, [status])=

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

validationSchema: Yup.object().shape({
    email: Yup.string()
        .email("Email not valid.")
        .required("Email is required!"),
    password: Yup.string()
        .required("Password is required!"),        
}),

handleSubmit(values, {setStatus} ) {
  console.log('values', values);
  axios 
    .post("https://bw-gigapet-ft.herokuapp.com/api/login", values)
    .then(response => {
      localStorage.setItem('token', response.data.token)
      setStatus(response.data);
      console.log('this is the response from axios post', response)
    })
    .catch(error => console.log(error.response))
},

})(LogInForm);

export default FormikLogInForm;