import React from 'react';
import { useSelector } from 'react-redux';

import converterSlice from '../../../../redux/slices/converter/converter';
import { AppState } from '../../../../redux/store';
import AmountStyled from './Amount-styled';

interface IProps {
    amount: string,
    dispatch: (e: any) => any
}

const Amount = ({amount, dispatch}: IProps) => {
    const converter = useSelector((state: AppState) => state.converter);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value !== '-' && e.target.value !== "+" && e.target.value.match(/^[+-]?[0-9]*([\.][0-9]*)?$/) || e.target.value.length === 0) {
            dispatch(converterSlice.actions.setAmount(parseFloat(e.target.value)));
        }
    };

    const stepAmount = (step: number = 1) => {
        if(converter.amount + step > -1) {
            dispatch(converterSlice.actions.setAmount(parseInt(amount) + step));
        }
    };

    return (
        <AmountStyled>
            <div className="amount-container">
                <input type="text" placeholder="0" value={amount} onChange={handleChange} />
                <span className="amount-switches">
                    <button onClick={() => stepAmount(1)}>+</button>
                    <button onClick={() => stepAmount(-1)}>-</button>
                </span>
            </div>
            <h2>Amount</h2>
        </AmountStyled>
    );
};

export default Amount;