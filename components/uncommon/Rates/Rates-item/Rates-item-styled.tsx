import styled from 'styled-components';

const RatesItemStyled = styled.tr`
        .table-coin {
            display: flex;
            padding: 0.5rem 0;
            gap: 0.5rem;

            & > div > div {
                width: 24px;
                height: 24px;
            }
        }

        td {
            padding: 0.5rem;
        }

        td:not(.name) {
                text-align: right;
        }
`

export default RatesItemStyled;
