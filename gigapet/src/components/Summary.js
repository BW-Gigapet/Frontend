import React from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

import { SelectCategory, CategoryBanner, SummaryData } from './index'

export class Summary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: 'Vegetables',
        }
    }

    componentDidMount() {
        //axios get data
        // axiosWithAuth().get(`/api/child/:id/meals?filter=prevThirty`)
        //     .then(resp => {
        //         console.log(resp)
        //     })
        //     .catch(err => console.log(err.response))
    }

    componentWillUnmount() {
        //cleanup
    }

    render() {
        return (
        <div>
            <h3>Summary</h3>
            <div>
                {/* select category */}
                <div>
                    {/* selected category banner */}
                    {/* data display */}
                </div>
            </div>
        </div>
        )
    }
}

export default Summary