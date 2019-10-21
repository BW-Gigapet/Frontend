import React, { useState, useEffect } from 'react'

export function EditForm(props) {
    return (
        <form>
            <div>
                <h4>Food Group</h4>
                <div>
                    {/* map <CategoryButton /> */}
                </div>
            </div>
            <div>
                <h4>Portion Size</h4>
                <span>more info button</span>
                <div>
                    {/* map <PortionButton /> */}
                </div>
                <div>
                    <button type='submit'>Save</button>
                </div>
            </div>
        </form>
    )
}

export default EditForm