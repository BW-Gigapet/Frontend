import styled from 'styled-components'
import { Field } from "formik";

export const FormTitle = styled.h2`
font-family: 'Nunito Sans', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 33px;
color: #247CAD;
margin-bottom: 0;
margin-top: 104px;
`;

export const FieldContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const FieldLabel = styled.label`
display: flex;
margin-bottom: 0;
`;

export const ActualLabel = styled.p`
font-family: 'Nunito Sans', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 24px;
color: black;
background: white important!;
padding-left: 5px;
margin-bottom: 0;
`;

export const InputField = styled(Field)`
height: 48px;
width: 343px;
background: #FFFFFF;
border: 1px solid #ECEBED;
border-radius: 6px;
font-family: Nunito Sans;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 20px;
padding-left: 16px;
`;

export const FormButtonContainer = styled.div`
margin: 20px;

`;

export const LinkButtonDefault = styled.button`
width: 195px;
height: 48px;
background: #247CAD;
border-radius: 6px;
color: white;
font-family: 'Nunito Sans', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 24px;

&:active {
    background: white;
    color: #247CAD;
    border: 1px solid #247CAD;
}

&:hover {
    background: white;
    color: #247CAD;
    border: 1px solid #247CAD;
}

`;

export const AnimalsImageContainer = styled.div`
margin: 51px;
`;