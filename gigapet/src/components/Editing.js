import React from 'react'

import { SelectCategory, CategoryBanner, EditingTable } from './index'

export class Editing extends React.Component {
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
            <div>
                <h3>Editing</h3>
                <p>Back to Summary</p> {/* link or change parent state ? */}
            </div>
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

export default Editing