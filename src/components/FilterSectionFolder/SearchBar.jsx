import React from 'react'
import styled from 'styled-components'
import Input from './Input'

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    const searchIcon = 'assets/images/search-icon.png'

    return (
        <SearchContainer>
            <Input
                placeholder={'Search Templates'}
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img src={searchIcon} alt="search-icon" />
        </SearchContainer>
    )
}

const SearchContainer = styled.div`
    padding: 0 13px 0 0;
    border: 0.5px solid #BDBDBD;
    border-radius: 2px;
    font-family: circular-std-light;
    display: flex;
    gap:0 6px;
    align-items: center;
    justify-content: space-between;
    width: 319px;
`

export default SearchBar
