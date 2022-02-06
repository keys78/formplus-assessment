import React, { useState, useEffect } from 'react';
import useAxiosFetch from '../utils/useAxiosFetch';
import { useGetTemplatesQuery } from '../services/templatesApi';
import { useDispatch, useSelector } from 'react-redux';
import { getTemplates } from '../redux/templatesSlice';
import TemplateModel from './TemplateModel';
import styled from 'styled-components';

const Menu = ({ searchTerm, templates, setTemplates, isLoading, fetchError }) => {

    useEffect(() => {
        const searchFilter = templates.filter((template) =>
            template.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
        setTemplates(searchFilter)
    }, [templates, searchTerm])


    return (
        <>
            {isLoading && <p className="statusMsg">Loading..</p>}
            {!isLoading && fetchError && <div className="statusMsg" style={{ color: "red" }}>{fetchError}</div>}

            
            { !isLoading && !fetchError && 
            templates.map((template, i) => (
                <CardDisplay>
               <TemplateModel key={i} template={template} i={i}/>
               </CardDisplay>
            ))}
          
           
        </>
    );
};

const CardDisplay = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

export default Menu;

