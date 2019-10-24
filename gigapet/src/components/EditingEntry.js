import React from 'react'
import { useDispatch } from 'react-redux'
import axiosWithAuth from '../utils/axiosWithAuth'

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
        <tr>
            <td>{props.meal.time}</td>
            <td>{props.meal.portionSize}</td>
            <td onClick={changeButtonHandler}>Change</td>
            <td onClick={deleteButtonHandler}>Delete</td>
        </tr>
    )
}

export default EditingEntry