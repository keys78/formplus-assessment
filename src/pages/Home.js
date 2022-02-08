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

    const x = templates
    // console.log(x)

    const [filtered, setFiltered] = useState([])

    useEffect(() => {
        setTemplates(data && data)
        console.log(x)
    }, [filtered, data])

    useEffect(() => {
        searchTemplates();
    }, [searchTerm])
    
    const searchTemplates = () => {
        if(searchTerm !== '') {
            const searchFilter = templates.filter((template) =>
            template.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
            setFiltered(searchFilter)
         } else {
            setFiltered(templates)
         }
    }

    const [textState, setTextState] = useState('All')


    return (
        <ScreenWrapper>
            <FilterSection searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
            templates={filtered} 
            setTemplates={setTemplates} 
            isLoading={isLoading} 
            fetchError={fetchError}
            setTextState={setTextState}
            />
            <Menu 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
            templates={filtered} 
            setTemplates={setTemplates}
            isLoading={isLoading} fetchError={fetchError}
            textState={textState}
            />
        </ScreenWrapper>
    )
};

const ScreenWrapper = styled.section`
    padding: 79px 116px 399px 116px;

    @media screen and (max-width: 1200px){
        padding: 79px 50px 399px 50px;
    }
    @media screen and (max-width: 1024px){
        padding: 50px 30px 399px 30px;
    }
    @media screen and (max-width: 640px){
        padding: 50px 30px 49px 30px;
    }
    @media screen and (max-width: 540px){
        padding: 50px 20px 30px 20px;
    }
`

export default Home;

