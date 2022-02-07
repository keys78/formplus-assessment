import React from 'react'

const Loader = () => {
    return (
        <>
            <div className="progress-1" >
                <div className="indeterminate" />
            </div >

            {/* <div class="placeholder shimmer">
                <div class="faux-image-wrapper">
                    <div class="faux-image" />
                </div>
                <div class="faux-text" />
                <div class="faux-text short" />
            </div> */}
            
              <div className='text-center font-bold'>
        Loading Templates, Please Wait...
        </div>


        </>
    )
}

export default Loader