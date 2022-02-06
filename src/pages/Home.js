import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import FilterSection from '../components/FilterSectionFolder/FilterSection';
import Menu from '../components/Menu';
import useAxiosFetch from '../utils/useAxiosFetch';
import { useDispatch, useSelector } from 'react-redux';
import { getTemplates } from '../redux/templatesSlice';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const { data, isLoading, fetchError } = useAxiosFetch('https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates')
    const [templates, setTemplates] = useState([]);

    useEffect(() => {
        setTemplates(data && data.slice(0, 20))
    }, [data])

    return (
        <ScreenWrapper>
            <FilterSection searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
            templates={templates} setTemplates={setTemplates} isLoading={isLoading} fetchError={fetchError}/>
            <Menu 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
            templates={templates} 
            setTemplates={setTemplates}
            isLoading={isLoading} fetchError={fetchError}
            />
        </ScreenWrapper>
    )
};

const ScreenWrapper = styled.section`
    padding: 79px 116px 399px 116px;
    border: 1px solid black;
`

export default Home;

