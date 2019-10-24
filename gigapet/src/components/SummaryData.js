import React from 'react';
import styled from 'styled-components';

export function SummaryData({daily, weekly, monthly}) {
    return (
        <div>
            <AverageContainer className='averageContainer'>
                <AverageTitle className='averageTitle'>Daily Average</AverageTitle>
                <Average>{daily}</Average>
            </AverageContainer>
            <AverageContainer className='averageContainer'>
                <AverageTitle className='averageTitle'>Weekly Average</AverageTitle>
                <Average>{weekly}</Average>
            </AverageContainer>
            <AverageContainer className='averageContainer'>
                <AverageTitle className='averageTitle'>Monthly Average</AverageTitle>
                <Average>{monthly}</Average>
            </AverageContainer>
        </div>
    )
}

export default SummaryData

const AverageContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const AverageTitle = styled.p`
    font-size: 14px;
    line-height: 20px;
`;

const Average = styled.p`
    font-size: 14px;
    line-height: 20px;
    margin-right: 5px;
`;