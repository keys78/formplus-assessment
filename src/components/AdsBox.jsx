import React from 'react';
import styled from 'styled-components';

const AdsBox = ({ adsIcon, text}) => {
    return (
        <AdsBoxContainer>
            <img src={adsIcon} alt="info-icon" />
            <h4>{text}</h4>
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
    margin: 83px 0 63px 0;

    h4 {
        font-family: circular-std-bold;
        margin-left: 26px;
        color: #000;
    }
`

export default AdsBox;
