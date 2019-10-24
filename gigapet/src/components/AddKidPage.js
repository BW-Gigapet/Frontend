import React, { useState, useEffect } from "react";
import { withFormik, Form } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { TopContentContainer, StyledForm, TopContent, ArrowButtonContainer, FormTitle, FieldContainer, FieldLabel, ActualLabel, InputField, LinkButtonDefault, FormButtonContainer, AnimalsImageContainer, ArrowButton } from "./FormStyles";
import axiosWithAuth from "../utils/axiosWithAuth";
import { connect } from 'react-redux';
import { getLoggedInUser } from '../actions';

const AddKidForm = ({ errors, touched, status }) => {
  console.log('AddKidForm props', errors, touched, status)

  const [kid, setKid] = useState([]);
  //const [loggedInUser, setLoggedInUser] = useState({})
  console.log('AddKid state', kid)

  useEffect(() => {

    if (status) {
    setKid([...kid, status]);
    }
  }, [status])

  let history = useHistory();

  const handleClick = () => {
  history.push("/")
  };

  return (
    <div className="addKidForm">
        <TopContentContainer className="topContentContainer">
          <TopContent className="topContent">
            <ArrowButtonContainer className="arrowButtonContainer">
              <ArrowButton type="button" onClick={handleClick} className="arrowBackButton">
                <img className="ButtonImage" src={ require('../assets/BackArrow.png')} alt="arrowIcon" />
              </ArrowButton>
            </ArrowButtonContainer>
          <FormTitle>Add Your Kid</FormTitle>
         </TopContent>
         </TopContentContainer>
        <StyledForm >
        <FieldContainer className="nameContainer">
        {touched.name && errors.name && <p className="warning">{errors.name}</p>}
            <div className="name">
              <FieldLabel htmlFor="name">
                <ActualLabel>User Name</ActualLabel>
              </FieldLabel>
              <div className="nameInputContainer">
                <InputField type="text" name="name" placeholder="User Name" size="45"/>
              </div>
            </div>
        </FieldContainer>
        <FormButtonContainer className="formButtonContainer">
            <LinkButtonDefault type="submit">Continue</LinkButtonDefault>
        </FormButtonContainer>
        </StyledForm>
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

    mapPropsToValues({ name }) {
        return {
            name: name || "",
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string()
            .min(2, "You must enter 2 or more letters!")
            .required("User Name is required!"),
        }),


        handleSubmit(values, {props, setStatus} ) {
          console.log('values and props', values, props);
              axiosWithAuth()
                .post(`/api/users/${props.loggedInUser.id}/children`, values) 
                
                .then(res => {
                  setStatus(res.data);
                  console.log('response from POST for adding Kid', res);
                  props.getLoggedInUser(() => props.history.push('/successaddkid'));
                  
                })
                .catch(error => console.log(error.response))
        },
        
    })(AddKidForm);

    const mapStateToProps = state => {
      console.log('mapsStateToProps state in Add Kid', state)

      return {
        loggedInUser: state.loggedInUser,
        mealData: state.mealData,
        isLoading: state.isLoading,
        error: state.error
      }
    }
        
  export default connect(mapStateToProps, { getLoggedInUser })(FormikSignUpForm);

