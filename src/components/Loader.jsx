import React from 'react'

const Loader = () => {
    const createLoaders = () => {
        const loaders = [];

        for (let i = 1; i < 16; i++) {
            loaders.push(
                <div key={i} className='placeholder-loader shimmer'>
                    <h1></h1>
                    <p></p>
                    <p></p>
                    <p></p>
                    <h6></h6>
                </div>
            )
        }
        return loaders
    }

    return (
        <>
            <div className='placeholder-container'>
                {createLoaders()}
            </div>
        </>
    )
}

export default Loader