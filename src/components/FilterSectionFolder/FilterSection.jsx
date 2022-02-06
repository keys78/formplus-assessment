import React from 'react';
import AdsBox from '../AdsBox';
import Filter from './Filter';
import SearchBar from './SearchBar';
import SortByDate from './SortByDate';
import SortByOrder from './SortByOrder';
import styled from 'styled-components';


const FilterSection = ({ searchTerm, setSearchTerm, templates, setTemplates, setTextState }) => {
    return (
        <FilterSectionWrapper>
            <div className='flex items-center justify-between'>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

                <div className='flex items-center justify-between gap-5'>
                    <h1>Sort By:</h1>
                    <Filter templates={templates} setTemplates={setTemplates} setTextState={setTextState}/>
                    <SortByOrder templates={templates} setTemplates={setTemplates}/>
                    <SortByDate templates={templates} setTemplates={setTemplates}/>
                </div>

            </div>

            <AdsBox
                adsIcon={"../assets/images/info-icon.png"}
                text={"Tada! Get started with a free template. Can't find what you are looking for? Search from the 1000+ available templates"}
            />
        </FilterSectionWrapper>
    );
};

const FilterSectionWrapper = styled.div`
    h1{
        font-family: circular-std-light;
        font-style: normal;
        font-weight: 450;
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        color: #989898;
    }
   
`

export default FilterSection;
