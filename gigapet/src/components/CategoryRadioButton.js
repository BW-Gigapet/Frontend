import React from 'react'

export function CategoryRadioButton({input, category}) {
    

    return (
        <label> 
            <div>
                {/* image */}
            </div>
            <p>{category}</p>
            <input type='radio' name='category' value={category} checked={category===input.category} /> {/* visibility: hidden; */}
        </label>
    )
}

export default CategoryRadioButton