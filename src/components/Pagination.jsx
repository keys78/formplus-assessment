import React from 'react'
import styled from 'styled-components'

const Pagination = ({ usersPerPage, totalUsers, first, last, previousPage, nextPage, setUsersPerPage }) => {

    return (
        <PaginationCont>
            <div className='flex items-center justify-between gap-12 relative'>
                <div className='cursor-pointer cursor-pointer flex gap-3 items-center ' onClick={previousPage}>
                    {first > 1 && <img className='rotate-180' src="../assets/images/right-chevron.png" alt="chevron-right" />}
                    Previous
                </div>
                <div> <span>{first + 1}</span>&nbsp; of &nbsp;{totalUsers} </div>
                <div className='flex gap-10 items-center' >

                    <div className='cursor-pointer flex gap-3 items-center' onClick={nextPage}>
                        Next
                        <img src="../assets/images/right-chevron.png" alt="chevron-right" />
                    </div>
                </div>
            </div>
        </PaginationCont>
    )
}

const PaginationCont = styled.div`
    width: 100%;
    padding: 76px 95px 0 95px;
    font-family: circular-std-book;   


    span {
        padding:5px 12px;
        background: #FFFFFF;
        border: 1px solid #3F3F3F;
        border-radius: 3px;
    }

    @media screen and (max-width: 640px){
        padding: 76px 40px 0 40px;
    }
    @media screen and (max-width: 540px){
        padding: 46px 20px 0 20px;
    }
`



export default Pagination;