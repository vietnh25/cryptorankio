import styled, {css} from 'styled-components';

const disabledHighlight = css`
        user-select: none; /* supported by Chrome and Opera */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
`;

const DropdownStyled = styled.div`
    position: relative;
    width: 300px;

    input {
        display: inline-block;
        font-size: 2rem;
        position: absolute;
        inset: 0;
        max-width: 100%;
        max-height: fit-content;
        padding: 3px 6px;
        ${disabledHighlight}
    }

    span {
        cursor: pointer;
        position: absolute;
        right: 0;
        width: 3rem;
        height: 3rem;
        z-index: 1;
    }

    &::after {
        z-index: 0;
        content: '';
        cursor: pointer;
        position: absolute;
        top: 50%;
        right: ${(props: any) => !props.open ? "1.5rem" : "1.25rem"};
        width: 1rem;
        height: 1rem;
        border-top: 1px solid black;
        border-left: 1px solid black;
        transform: ${(props: any) => !props.open ? "rotate(225deg) translateY(100%)" : "rotate(45deg) translateY(-50%)"};
    }

    ul {
        position: absolute;
        top: 100%;

        background-color: white;
        width: 100%;
        padding: 0.5rem;
        border: 1px solid black;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    li {
        cursor: pointer;
        font-size: 1.25rem;

        ${disabledHighlight}
    }
`;

export default DropdownStyled;