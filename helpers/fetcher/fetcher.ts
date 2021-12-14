export const fetchCoins = async () => {
    const res2 = await fetch("https://tstapi.cryptorank.io/v0/coins?limit=10");
    const { data } = await res2.json();
    const currenciesListObject = data;

    return currenciesListObject;
};

export const fetchCurrencies = async () => {
    const res2 = await fetch("https://api.cryptorank.io/v1/currencies/1?api_key=" + process.env.API_KEY);
    const {data} = await res2.json();
    const currenciesListObject = data?.values;

    return currenciesListObject;
};

export const fetchCrowdsales = async () => {
    const res2 = await fetch("https://api.cryptorank.io/v1/currencies/crowdsales/1?api_key=" + process.env.API_KEY);
    const {data} = await res2.json();
    const currenciesListObject = data?.values;

    return currenciesListObject;
};