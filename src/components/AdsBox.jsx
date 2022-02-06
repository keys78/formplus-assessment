import React from 'react';
import styled from 'styled-components';

const AdsBox = ({ adsIcon, text}) => {
    return (
        <AdsBoxContainer>
            <img src={adsIcon} alt="info-icon" />
            <h1>{text}</h1>
        </AdsBoxContainer>
    );
};

const AdsBoxContainer = styled.div`
    padding: 22px 0 13px 0;
    background: #FFF4EA;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        font-family: circular-std-book;
        margin-left: 26px;
    }
`

export default AdsBox;
