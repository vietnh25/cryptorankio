import React from 'react';
import { useDispatch } from 'react-redux';
import converterSlice from '../../../../../redux/slices/converter/converter';
import { EPosition } from '../../../../../redux/slices/converter/reducers';

import DropdownStyled from './Dropdown-styled';

interface IProps {
    selectedCurrency: string
    isDropDownOpen: boolean,
    setIsDropdownOpen: any,
    currencies: Array<any>,
    position: EPosition
}

const Dropdown = ({selectedCurrency, isDropDownOpen, setIsDropdownOpen, currencies, position}: IProps) => {
    const setCurrency = converterSlice.actions.selectCurrency;
    const dispatch = useDispatch();

    const handleChange = () => {};

    const handleSetCurrency = (currency: string, position: EPosition) => {
        dispatch(setCurrency({currency, position}))
    };

    return (
        <DropdownStyled>
            <input type="text" value={selectedCurrency} onChange={handleChange} />
            <span onClick={setIsDropdownOpen}></span>
            {isDropDownOpen && <ul>
                {currencies.map((c) => <li key={c} onClick={() => handleSetCurrency(c, position)}>{c}</li>)}
            </ul>}
        </DropdownStyled>
    );
};

export default Dropdown;
