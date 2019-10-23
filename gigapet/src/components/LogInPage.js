import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { withFormik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { FormTitle, FieldContainer, FieldLabel, ActualLabel, InputField, LinkButtonDefault, FormButtonContainer, AnimalsImageContainer, ArrowButton } from "./FormStyles";
import { connect } from 'react-redux';
import { getLoggedInUser } from '../actions';


const LogInForm = ({ errors, touched, status, values }) => {
  console.log('props in Login', errors, touched, status)

  const [users, setUsers] = useState([]);
  console.log('state in Login Form', users)

  useEffect(() => {
    if (status) {
    setUsers([...users, status]);
    }
  }, [status])

  let history = useHistory();

  const handleClick = () => {
  history.push("/")
  };

  return (
    <div className="logInForm">
      <div className="arrowButtonContainer">
            <ArrowButton onClick={handleClick} className="arrowBackButton">
              <img className="ButtonImage" src={ require('../assets/BackArrow.png')} alt="arrowIcon" />
            </ArrowButton>
      </div>
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

handleSubmit(values, {props, setStatus} ) {
  console.log('values', values);
  axios 
    .post("https://bw-gigapet-ft.herokuapp.com/api/login", values)
    .then(res=> {
      localStorage.setItem('token', res.data.token)
      setStatus(res.data);
      props.getLoggedInUser();
      setTimeout(props.history.push('/dashboard'), 1000);
      console.log('this is the response from axios post', res)
    })
    .catch(error => console.log(error.res))
},

})(LogInForm);

const mapStateToProps = state => {
  console.log('mapsStateToProps state in Login', state)

  return {
    loggedInUser: state.loggedInUser,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps, { getLoggedInUser })(FormikLogInForm);