import React from 'react';
import styled from 'styled-components';

import { EditingEntry, EditModal } from './index'

export function EditingTable(props) {
    const [edit, setEdit] = React.useState('')
    const [open, setOpen] = React.useState(false)

    return (
        <>
        <StyledTable>
            <thead>
                <tr>
                    <TableTitle>Time</TableTitle>
                    <TableTitle>Size</TableTitle>
                    <TableTitle ></TableTitle>
                    <TableTitle></TableTitle>
                </tr>
            </thead>
            <tbody>
                {/* map table entries */}
                {props.meals.map(meal => <EditingEntry key={meal.id} meal={meal} setEdit={setEdit} setOpen={setOpen} />)} 
            </tbody>
        </StyledTable>
        <EditModal {...{open, setOpen, edit}} />
        </>
    )
}

export default EditingTable

const StyledTable = styled.table`
  width: 100%;
`;

const TableTitle = styled.td`
    width: 25%;
    font-size: 14px;
    line-height: 20px;
`;