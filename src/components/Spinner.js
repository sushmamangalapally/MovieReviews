import React from 'react'
import spinner from './Spinner-1s-200px.gif'
function Spinner() {
    return (
        <div>
            <img
                src={spinner}
                style={{ width: '200px', margin: 'auto', display: 'block'}}
                alt="Loading..."
            />
        </div>
    )
}

export default Spinner
