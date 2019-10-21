import React from 'react'

import { SelectCategory, CategoryBanner, SummaryData } from './index'

export class Summary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        //axios get data
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