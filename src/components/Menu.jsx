import React, { useState, useEffect } from 'react';
// import useAxiosFetch from '../utils/useAxiosFetch';
// import { useGetTemplatesQuery } from '../services/templatesApi';
// import { useDispatch, useSelector } from 'react-redux';
// import { getTemplates } from '../redux/templatesSlice';
import TemplateModel from './TemplateModel';
import styled from 'styled-components';
import Pagination from './Pagination';

const Menu = ({ searchTerm, templates, setTemplates, isLoading, fetchError, textState }) => {
    useEffect(() => {
        const searchFilter = templates.filter((template) =>
            template.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
        setTemplates(searchFilter)
    }, [searchTerm])

    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState(15);
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = templates && templates.slice(indexOfFirstUser, indexOfLastUser)
    const totalPages = templates && templates.length / usersPerPage

    const prev = () => {
        currentPage <= 1 ? setCurrentPage(currentPage) : setCurrentPage(currentPage - 1)
    }

    const next = () => {
        currentPage < totalPages && setCurrentPage(currentPage + 1)
    }



    return (
        <>
            {isLoading && <p className="statusMsg">Loading..</p>}
            {!isLoading && fetchError && <div className="statusMsg" style={{ color: "red" }}>{fetchError}</div>}

            {!isLoading && !fetchError &&
                <>
                    <ViewScroller>
                        <CountAndCheckers className='flex items-center justify-between'>
                            <h3>{textState} Templates</h3>
                            <h2>{templates.length} templates</h2>
                        </CountAndCheckers>
                        <CardDisplay>
                            {templates && currentUsers.map((template, i) => (
                                <TemplateModel key={i} template={template} i={i} />
                            ))}
                        </CardDisplay>
                    </ViewScroller>
                    <Pagination
                        usersPerPage={usersPerPage}
                        totalUsers={templates && templates.length}
                        currentPage={currentPage}
                        first={indexOfFirstUser}
                        last={indexOfLastUser}
                        previousPage={prev}
                        nextPage={next}
                        setUsersPerPage={setUsersPerPage}
                    />
                </>
            }
        </>
    );
};

const CardDisplay = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    gap:69px;
   
`
const CountAndCheckers = styled.div`
    margin-bottom: 23px;
    h3{
        font-family: circular-std-book; 
        font-weight: 450;
        font-size: 18px;
        line-height: 23px;
        color: #3F3E3E;
    }

    h2 {
        font-family: circular-std-light; 
        font-weight: 450;
        font-size: 14px;
        line-height: 18px;
        text-align: right;
        color: #989898;
    }
`

const ViewScroller = styled.div`
    height:700px;
    overflow-y: scroll;
    margin-right: 20px;
    padding:0 5px;

    /* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background:  transparent; 
  margin-top: 30px;
    /* margin-bottom: 10px; */
    background-clip: content-box;   
  
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #171616; 
  height: 2px;
  width: 2px;
  border-radius: 10px;
  
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
`

export default Menu;

