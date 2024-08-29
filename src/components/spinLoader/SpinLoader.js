import React from 'react';
import "./SpinLoader.css"

const SpinLoader = ({ childer }) => {
    return (
        <div className='loader '>
            {childer}
        </div>
    )
}

export default SpinLoader
