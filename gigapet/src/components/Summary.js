import React from 'react'
import { connect } from 'react-redux'
import axiosWithAuth from '../utils/axiosWithAuth'
import styled from 'styled-components';

import categories from '../categories'

import { SelectCategory, CategoryBanner, SummaryData } from './index'

class SummaryClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: 'Vegetables',
            monthly: '--',
            weekly: '--',
            daily: '--',
        }
    }

    getData = () => {
        console.log(this.props)
        //axios get data
        console.log('Summary.js getData')
        const childId = this.props.loggedInUser.childAccounts[0].id
        axiosWithAuth().get(`/api/child/${childId}/meals?filter=monthly&&foodType=${this.state.category}`)
            .then(resp => {
                console.log(resp)
                if (this.mounted) {
                    // add to state
                    const monthly = `${resp.data.average}%`
                    // const weekly = resp.data.filter(meal => new Date(meal.date) > new Date() - 1000*60*60*24*7 ).map(meal => portionPercentage[meal.portion]).reduce((acc,curr)=>acc+curr)/7
                    // const daily = resp.data.filter(meal => new Date(meal.date) > new Date() - 1000*60*60*24 ).map(meal => portionPercentage[meal.portion]).reduce((acc,curr)=>acc+curr)/7
                    // console.log(monthly)
                    this.setState({monthly})
                }
            })
            .catch(err => {
                console.log(err.response)
                this.setState({monthly: '--'})
            })
        axiosWithAuth().get(`/api/child/${childId}/meals?filter=weekly&&foodType=${this.state.category}`)
            .then(resp => {
                console.log(resp)
                if (this.mounted) {
                    // add to state
                    const weekly = `${resp.data.average}%`
                    // console.log(weekly)
                    this.setState({weekly})
                }
            })
            .catch(err => {
                console.log(err.response)
                this.setState({weekly: '--'})
            })
        axiosWithAuth().get(`/api/child/${childId}/meals?filter=yesterday&&foodType=${this.state.category}`)
            .then(resp => {
                console.log(resp)
                if (this.mounted) {
                    // add to state
                    const daily = `${resp.data.average}%` //resp.data.map(meal => portionPercentage[meal.portion]).reduce((acc,curr)=>acc+curr)
                    // console.log(daily)
                    this.setState({daily})
                }
            })
            .catch(err => {
                console.log(err.response)
                this.setState({daily: '--'})
            })
    }

    componentDidMount() {
        this.mounted = true
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.category !== this.state.category || prevProps !== this.props) {
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
            <SummaryContainer className="summary-container">
                <SummaryHeader>Summary</SummaryHeader>
                <SummaryContentContainer className="summary-content-container">
                    <SelectCategoryContainer className="select-category-container">
                        {categories.map((category,index) => <SelectCategory key={index} category={category} active={this.state.category === category} setCategory={this.setCategory} />)}
                    </SelectCategoryContainer>
                    <CategoryAveragesContainer className="category-averages-container">
                        <CategoryBanner category={this.state.category} />
                        <SummaryData daily={this.state.daily} weekly={this.state.weekly} monthly={this.state.monthly} />
                    </CategoryAveragesContainer>
                </SummaryContentContainer>
            </SummaryContainer>
        </div>
        )
    }
}

function mapStateToProps(state) {
    const { loggedInUser, mealData } = state
    return { loggedInUser, mealData }
}

export const Summary = connect(mapStateToProps)(SummaryClass)

export default Summary

const SummaryContainer = styled.div`
   margin-bottom: 150px;
`;

const SummaryContentContainer = styled.div`
   display: flex;
   flex-direction: row;
`;

const SelectCategoryContainer = styled.div`
    width: 25%;
    margin-right: 10%;
`;

const CategoryAveragesContainer = styled.div`
    width: 65%;
`;

const SummaryHeader = styled.h3`
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 41px;
color: #247CAD;
text-align: left;
margin: 0;
margin-bottom: 20px;
`;