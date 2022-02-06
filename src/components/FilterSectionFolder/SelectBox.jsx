import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'


const SelectBox = ({ options, newSelected, label, onClick }) => {
    const [selected, setSelected] = useState(newSelected)
    const [isDropped, setIsDropped] = useState(false)


    const renderOptions = options.map((val, i) =>
        <h1 key={i} onClick={() => onClick(val, setSelected(val.option), setIsDropped(!isDropped))}>{val.option}</h1>
    )

    const optionsRef = useRef()
    useEffect(() => { document.body.addEventListener('mousedown', handleClickOutside) })

    const handleClickOutside = (event) => {
        optionsRef.current && !optionsRef.current.contains(event.target) && setSelected(newSelected)
    };

    return (
        <SelectBoxWrapper ref={optionsRef}>
            
            <Label>{label}</Label>
            <SelectBoxContainer onClick={() => setIsDropped(!isDropped)}>
                <h5>{selected}</h5>
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
    border-radius: 2px;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    
`

const Label = styled.label`
    position: absolute;
    background: #fff;
    top:-7px;
    left: 22px;
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

    h5{
        padding:5px 15px 6px 23px;
        text-align: left !important;
        transition: all .2s ease-in-out;
        font-family: circular-std-book !important;
        color: #000 !important;

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
