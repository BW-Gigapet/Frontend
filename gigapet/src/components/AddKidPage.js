import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import { Link } from 'react-router-dom';
import * as Yup from "yup";
import axios from 'axios';
import { FormTitle, FieldContainer, FieldLabel, ActualLabel, InputField, LinkButtonDefault, FormButtonContainer, AnimalsImageContainer } from "./FormStyles";

const AddKidForm = ({ errors, touched, status, props }) => {

  const [kid, setKid] = useState([]);

  useEffect(() => {
    if (status) {
    setKid([...kid, status]);
    }
  }, [status])

  //  create proper functionality for back button
    
  //   const routeToHome = event => {
  //       props.history.push('/kidsprofilesetup');
  //     };
  
  return (
    <div className="addKidForm">
      <div className="arrowButtonContainer">
        <Link to="/kidsprofilesetup">{/*is Link needed?*/}
          <button className="arrowBackButton">
            <img  /*onClick={() => routeToHome()*/ className="ButtonImage" src={ require('../assets/BackArrow.png')} alt="arrowIcon" />
          </button>
        </Link>
      </div>
      <Form >
        <FormTitle>Sign Up</FormTitle>
        <FieldContainer className="nameContainer">
        {touched.name && errors.name && <p className="warning">{errors.name}</p>}
            <div className="name">
              <FieldLabel htmlFor="name">
                <ActualLabel>User Name</ActualLabel>
              </FieldLabel>
              <div className="nameInputContainer">
                <InputField type="text" name="username" placeholder="User Name" size="45"/>
              </div>
            </div>
        </FieldContainer>
        <FormButtonContainer className="formButtonContainer">
            <LinkButtonDefault type="submit">Continue</LinkButtonDefault>
        </FormButtonContainer>
        <FormButtonContainer className="formButtonContainer">
            <LinkButtonDefault type="button">Skip</LinkButtonDefault>
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

    mapPropsToValues({ username }) {
        return {
            username: username || "",
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
            .min(2, "You must enter 2 or more letters!")
            .required("User Name is required!"),
        }),
        
        handleSubmit(values, {props, setStatus} ) {
          console.log('values', values);
          axios
            .post(`https://bw-gigapet-ft.herokuapp.com/api/users/{id}/children`, values) // add back $ before {id}
            //add correct API & anything else needed for functionality
            .then(response => {
              setStatus(response.data);
              console.log(response);
              props.history.push('/');
            })
            .catch(error => console.log(error.response))
        },   
    })(AddKidForm);
        
  export default FormikSignUpForm;