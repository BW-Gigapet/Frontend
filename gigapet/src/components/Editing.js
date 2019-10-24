import React from 'react';
import { connect } from 'react-redux'
import axiosWithAuth from '../utils/axiosWithAuth'
import styled from 'styled-components';

import categories from '../categories'

import { SelectCategory, CategoryBanner, EditingTable } from './index'

class EditingClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: 'Vegetables',
            meals: [],
            error: '',
        }  
    }

    getData = () => { 
        const childId = this.props.loggedInUser.childAccounts[0].id
        axiosWithAuth().get(`/api/child/${childId}/meals?filter=today&&foodType=${this.state.category}`)
        .then(res => {
            if (this.mounted) {
                console.log(res.data);
                this.setState({meals: res.data.meals})
            }
        })
        .catch((error) => {
            console.log(error)
        });
    }

    componentDidMount() {
        this.mounted = true
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.category !== this.state.category || prevProps !== this.props) {
            console.log('update editing, props change', prevProps !== this.props)
            this.getData()
        }
    }

    componentWillUnmount() {
        //cleanup
        this.mounted = false
    }

    setCategory = category => {
        this.setState({category})
    }

    render() {
        return (
        <div hidden={this.props.hidden}>
            <EditingHeaderContainer>
                <EditingHeader>Editing</EditingHeader>
                <BackToSummary onClick={()=>{this.props.history.push('/dashboard')}}>Back to Summary</BackToSummary>
            </EditingHeaderContainer>
            <EditingContentContainer>
                <SelectCategoryContainer className="select-category-container">
                    {categories.map((category,index) => <SelectCategory key={index} category={category} active={this.state.category === category} setCategory={this.setCategory} />)}
                </SelectCategoryContainer>
                <EditingTableContainer>
                    <CategoryBanner category={this.state.category} />
                    {/* data display */}
                    <EditingTable meals={this.state.meals} />
                </EditingTableContainer>
            </EditingContentContainer>
        </div>
        )
    }
}

function mapStateToProps(state) {
    const { loggedInUser, mealData } = state
    return { loggedInUser, mealData }
}

export const Editing = connect(mapStateToProps)(EditingClass)

export default Editing

const EditingContentContainer = styled.div`
   display: flex;
   flex-direction: row;
`;

const SelectCategoryContainer = styled.div`
    width: 25%;
    margin-right: 10%;
`;

const EditingTableContainer = styled.div`
    width: 65%;
`;

const EditingHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    align-content: flex-end;
    margin-bottom: 20px;
    margin-top: 25px;
`;

const EditingHeader = styled.h3`
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 41px;
    color: #247CAD;
    text-align: left;
    margin: 0;
`;

const BackToSummary = styled.p`
    font-size: 16px;
    line-height: 20px;
    color: #247CAD;
    margin: 0;
    cursor: pointer;
`;