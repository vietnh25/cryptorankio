import React from 'react';

import RatesTableStyled from './Rates-table-styled';
import RatesItem from '../Rates/Rates-item/Rates-item';
import { EPricedInCurrency } from '../Rates/Rates';

interface IProps {
    currencies: Array<any>,
    isDisplayedIn: EPricedInCurrency
}

const RatesTable = ({currencies, isDisplayedIn}: IProps) => {
    return (
        <RatesTableStyled>
                <thead>
                    <tr>
                        <th><span className="name">Name</span></th>
                        <th><span>Price</span></th>
                        <th><span>Market Cap</span></th>
                        <th><span>Circ. Supply</span></th>
                        <th><span>Category</span></th>
                    </tr>
                </thead>
                <tbody>
                    {currencies?.map(({key, name, symbol, price: {USD, BTC, ETH}, availableSupply, marketCap, category, icon}: any, index: number) => 
                        {
                            return <RatesItem
                                key={key} 
                                name={name}
                                symbol={symbol}
                                price={isDisplayedIn === EPricedInCurrency.USD 
                                    ? USD
                                    : isDisplayedIn === EPricedInCurrency.BTC
                                        ? BTC
                                        : ETH
                                } 
                                availableSupply={availableSupply}
                                marketCap={marketCap} 
                                category={category}
                                icon={icon}
                                hasBackground={index % 2 === 1}
                            />
                        }
                    )}
                </tbody>
        </RatesTableStyled>
    );
};

export default RatesTable;
