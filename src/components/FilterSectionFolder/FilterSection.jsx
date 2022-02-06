import React from 'react';
import AdsBox from '../AdsBox';
import TemplateModel from '../TemplateModel';
import Filter from './Filter';
import SearchBar from './SearchBar';
import SortByDate from './SortByDate';
import SortByOrder from './SortByOrder';


const FilterSection = ({ searchTerm, setSearchTerm, templates, setTemplates }) => {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

                <div className='flex items-center justify-between'>
                    <Filter templates={templates} setTemplates={setTemplates}/>
                    <SortByOrder templates={templates} setTemplates={setTemplates}/>
                    <SortByDate templates={templates} setTemplates={setTemplates}/>
                </div>

            </div>

            <AdsBox
                adsIcon={"../assets/images/info-icon.png"}
                text={"Tada! Get started with a free template. Can't find what you are looking for? Search from the 1000+ available templates"}
            />
            <TemplateModel />
        </div>
    );
};

export default FilterSection;
