import React from 'react'

import { SelectCategory, CategoryBanner, EditingTable } from './index'

export class Editing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            meals: [],
            error: '',
        }
        
    }

    componentDidMount() {
        axios.get('https://bw-gigapet-ft.herokuapp.com/api/meals/' /*get id from state*/
              .then(res => { 
                  console.log(res.data.meals);
                  this.setState({meals: res.data.meals})
              })
              .catch((error) => {
                  console.log(error)
              })
        )}

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