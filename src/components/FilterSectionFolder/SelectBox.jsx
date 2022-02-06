import React, { useState } from 'react'
import styled from 'styled-components'


const SelectBox = ({options, newSelected, label, onClick}) => {
    const [selected, setSelected] = useState(newSelected)
    const [isDropped, setIsDropped] = useState(false)

    // const selectVal = (value) => {
    //     setSelected(value)
    //     setIsDropped(!isDropped)
    // }
    

    const renderOptions = options.map((val, i) =>
        <h1 key={i} onClick={() => onClick(val, setSelected(val.option), setIsDropped(!isDropped))}>{ val.option}</h1>
    )
    // const selectVal = (value) => {
    //     setSelected(value)
    //     setIsDropped(!isDropped)
    // }
    
    // const renderOptions = options.map((val, i) =>
    //     <h1 key={i} onClick={() => selectVal(val.option)}>{ val.option}</h1>
    // )


    return (
        <SelectBoxWrapper>
            <Label>{label}</Label>
            <SelectBoxContainer onClick={() => setIsDropped(!isDropped)}>
                <h1>{selected}</h1>
                <img src="./assets/images/drop-chevron.png" alt="drop-chevron-formplus" />
            </SelectBoxContainer>

            {isDropped && <Dropdown>
                {renderOptions}
            </Dropdown>
            }
        </SelectBoxWrapper>
    )
}

const SelectBoxWrapper = styled.div`
    position: relative;
    width: 160px;
`
const SelectBoxContainer = styled.div`
    width: 100%;
    border: 0.5px solid #C4C4C4;
    padding: 10px 15px 11px 23px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    
`

const Label = styled.label`
    position: absolute;
    background: #fff;
    top:-7px;
    left: 24px;
    padding: 0 2px;
    font-family: circular-std-light;   
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.01em;
    color: #8F8B8B;
`

const Dropdown = styled.div`
    border: 0.5px solid #C4C4C4;
    background: #fff;
    position: absolute;
    width: 100%;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);

    h1{
        padding:5px 15px 6px 23px;
        transition: all .2s ease-in-out;
        &:hover{
            cursor: pointer;
            transform: scale(0.98)
        }
    }
    h1:nth-child(even){
        background: #f3f3f3;
    }
`

export default SelectBox
