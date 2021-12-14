interface IProps {
    amountFrom: number,
    amountTo: number,
    selectedCurrencyFrom: string,
    selectedCurrencyTo: string
}

const CalculationResult = ({amountFrom, amountTo, selectedCurrencyFrom, selectedCurrencyTo}: IProps) => {
    return (
        <h2>
            {amountFrom} {selectedCurrencyFrom} = {amountTo} {selectedCurrencyTo}
        </h2>
    );
};

export default CalculationResult;