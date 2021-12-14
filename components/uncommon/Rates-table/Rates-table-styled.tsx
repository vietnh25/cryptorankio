import styled from 'styled-components';

const RatesTableStyled = styled.table`
        width: 100%;
        margin-top: 1rem;
        border: 1px solid gray;
        border-radius: 5px;

        span {
            display: inline-block;
            padding: 10px;
            width: 100%;
            
            &:not(.name) {
                text-align: right;
            }

            &.name {
                text-align: left;
            }
        }

        thead tr:first-child {
            background-color: #ccccc2
        }

        th {
            padding: 0.5rem 0;
            font-size: 1.5rem;
        }

        td {
            font-size: 1.25rem;
        }
`;

export default RatesTableStyled;
