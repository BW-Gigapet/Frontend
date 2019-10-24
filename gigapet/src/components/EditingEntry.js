import React from 'react'
import { useDispatch } from 'react-redux'
import axiosWithAuth from '../utils/axiosWithAuth'
import styled from 'styled-components';

import { fetchMeals } from '../actions'

export function EditingEntry(props) {
    const dispatch = useDispatch()

    function changeButtonHandler(e) {
        console.log('changeHandler')
        // trigger edit modal
        props.setEdit(props.meal)
        props.setOpen(true)
    }

    function deleteButtonHandler(e) {
        console.log('deleteHandler')
        // axios.delete this entry
        axiosWithAuth().delete(`/api/meals/${props.meal.id}`)
        .then(resp => {
            console.log(resp)
            dispatch(fetchMeals(props.meal.child_id))
        })
        .catch(err => {
            console.log(err.response)
        })
    }

    return (
        <StyledTableRow>
            <TimeSizeEntry>{props.meal.time}</TimeSizeEntry>
            <TimeSizeEntry>{props.meal.portionSize}</TimeSizeEntry>
            <ChangeColumn onClick={changeButtonHandler}>Change</ChangeColumn>
            <DeleteColumn onClick={deleteButtonHandler}>Delete</DeleteColumn>
        </StyledTableRow>
    )
}

export default EditingEntry

const StyledTableRow = styled.tr`
  width: 100%;
`;

const TimeSizeEntry = styled.td`
    width: 25%;
    font-size: 14px;
    line-height: 20px;
`;

const ChangeColumn = styled.td`
    width: 25%;
    font-size: 14px;
    line-height: 20px;
    font-weight: bold;
`;

const DeleteColumn = styled.td`
    width: 25%;
    font-size: 14px;
    line-height: 20px;
    font-weight: bold;
`;