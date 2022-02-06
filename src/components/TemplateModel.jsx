import React from 'react';
import styled from 'styled-components';

const TemplateModel = ({ template, i}) => {
    return (
        <TemplateModelBox>
            <div>
                <h1>{template.name}</h1>
                <p>{template.description}</p>
            </div>
            <h6>Use Template</h6>
        </TemplateModelBox>
    )
};

const TemplateModelBox = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
    border-radius: 2px;
    width: 100%;
    
    div {
        padding: 19px 20px 41px 20px;
        min-height: 160px;
        
    }

    h1 {
        font-family: circular-std-bold;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        padding-bottom: 17px;
        line-height: 30px;
        color: #333447;
    }

    p {
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        line-height: 17px;
        color: #3F3E3E;
    }
    h6 {
        font-family: circular-std-book;
        font-size: 14px;
        line-height: 18px;
        background: #f1f1f1;
        color: #08BD37;
        padding: 12px 0 12px 22px;
        border-bottom-left-radius:2px;
        border-bottom-left-radius:2px;
        cursor: pointer;
        border:0 1px 1px 1px solid #e0e0e0;
    }
`


export default TemplateModel;
