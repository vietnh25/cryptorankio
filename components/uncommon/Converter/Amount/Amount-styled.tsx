import React from 'react';
import styled from 'styled-components';

const AmountStyled = styled.div`
    display: flex;
    align-items: center;
    flex: 1 1 100%;


    .amount-container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }


    input {
        display: inline-block;
        font-size: 2rem;
        padding: 3px 6px;
    }

    .amount-switches {
        display: flex;
        flex-direction: column;
        margin-right: 1rem;
        margin-left: 0.25rem;
        gap: 2px;
    }

    h2 {
        font-size: 1.5rem;
        background-color: #e8e8e8;
        align-self: stretch;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        border: 1px solid #212121;
    }

    button {
        width: 24px;
        height: 24px;
        background-color: #F6F6F6;
        border: none;
        border-radius: 5px;
        border: 1px solid #212121;
    }

`

export default AmountStyled;
