import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import { Link } from 'react-router-dom';
import * as Yup from "yup";
// import axios from 'axios';
import { FormTitle, FieldContainer, FieldLabel, ActualLabel, InputField, LinkButtonDefault, FormButtonContainer, AnimalsImageContainer } from "./FormStyles";
import axiosWithAuth from "../utils/axiosWithAuth";

const AddKidForm = ({ errors, touched, status }) => {
  console.log('AddKidForm props', errors, touched, status)

  //======SET STATE OF DATA TO USE IN POSTING/GETTING (see POST code below)===========
  const [kid, setKid] = useState([]);
  //const [loggedInUser, setLoggedInUser] = useState({})
  console.log('AddKid state', kid)

  useEffect(() => {
    

    if (status) {
    setKid([...kid, status]);
    }
  }, [status])

  //======END SET STATE OF DATA TO USE IN POSTING/GETTING===========

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
        <FieldContainer className="usernameContainer">
        {touched.name && errors.name && <p className="warning">{errors.name}</p>}
            <div className="username">
              <FieldLabel htmlFor="name">
                <ActualLabel>User Name</ActualLabel>
              </FieldLabel>
              <div className="usernameInputContainer">
                <InputField type="text" name="name" placeholder="User Name" size="45"/>
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

//=============Initializing Form's Empty State==================
    mapPropsToValues({ name }) {
        return {
            name: name || "",
        };
    },
//=============End Initializing Form's Empty State==================
    
//======VALIDATION SCHEMA==========
    validationSchema: Yup.object().shape({
        name: Yup.string()
            .min(2, "You must enter 2 or more letters!")
            .required("User Name is required!"),
        }),
//======END VALIDATION SCHEMA==========
        
//======POST REQUEST (see how status is set above)==========
        
        handleSubmit(values, {props, setStatus} ) {
          console.log('values and props', values, props);
          axiosWithAuth()
            .get('/api/users')
            .then(res => {
              console.log('response from GET id Kid', res)
              //setLoggedInUser(res.data.loggedInUser)
              axiosWithAuth()
                .post(`/api/users/${res.data.loggedInUser.id}/children`, values) // add back $ before {id}
                //add correct API & anything else needed for functionality
                .then(res => {
                  setStatus(res.data);
                  console.log('response from POST for adding Kid', res);
                  props.history.push('/dashboard');
                })
                .catch(error => console.log(error.res))
            }) 
            .catch(err => {
              console.log('could not render data', err)
            })

          
        },
//======END POST REQUEST==========
        
    })(AddKidForm);
        
  export default FormikSignUpForm;