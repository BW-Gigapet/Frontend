import React from 'react'

import { SelectCategory, CategoryBanner, EditingTable } from './index'

export class Editing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: 'Vegetables',
            meals: [],
        }
    }

    componentDidMount() {
        //axios get data 
        //`https://bw-gigapet-ft.herokuapp.com/api/child/:id/meals?foodType=${this.state.category}&&filter=today`
        //this.setState({meals: resp.data.meals})
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
                    <EditingTable meals={this.state.meals} />
                </div>
            </div>
        </div>
        )
    }
}

export default Editing