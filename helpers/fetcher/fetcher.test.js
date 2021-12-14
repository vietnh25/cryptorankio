const {fetchCoins, fetchCurrencies} = require("./fetcher.ts");

jest.mock("./fetcher.ts");

let coinsObject;
let currenciesArray;

beforeEach(() => {
    coinsObject = {
        USD: {
          price: 54880.58452419,
          volume24h: 11369763302,
          high24h: 55230.90504917,
          low24h: 53827.63929962,
          marketCap: 1033885343584.832,
          percentChange24h: -0.7178,
          percentChange7d: 14.8857,
          percentChange30d: 18.2245,
          percentChange3m: 63.3222,
          percentChange6m: -8.9676
        },
        BTC: {
          price: 1,
          volume24h: 207172,
          high24h: 1,
          low24h: 1,
          marketCap: 18838818,
          percentChange24h: 0,
          percentChange7d: 0,
          percentChange30d: 0,
          percentChange3m: 0,
          percentChange6m: 0
        }
    };

    currenciesArray = [{
          rank: 1,
          key: 'bitcoin',
          name: 'Bitcoin',
          symbol: 'BTC',
          type: 'coin',
          tickersCount: 660,
          marketCap: 1033543789940.0516,
          fullyDilutedMarketCap: 1152114168184.56,
          availableSupply: 18838775,
          maxSupply: 21000000,
          totalSupply: 21000000,
          icon: 'https://img.tstapi.cryptorank.io/coins/icon.bitcoin1524754012028.png',
          image: 'https://img.tstapi.cryptorank.io/coins/bitcoin1524754012028.png',
          tokens: [],
          category: 'Currency',
          categoryId: 38,
          volume24h: 182079.297,
          price: { USD: 54862.57943736, BTC: 1, ETH: 15.2394969777 },
          histPrices: {
            '30D': [Object],
            '24H': [Object],
            '1Y': [Object],
            YTD: [Object],
            '6M': [Object],
            '3M': [Object]
          },
          athPrice: {
            BTC: 1,
            ETH: 679.4669284725045,
            USD: 64845.53743441,
            date: '2021-04-14',
            dateBTC: '2021-07-11',
            dateETH: '2015-11-04'
          },
          volatility: { USD: 4.1300225, ETH: 2.2614682 }
        }, {
          rank: 2,
          key: 'ethereum',
          name: 'Ethereum',
          symbol: 'ETH',
          type: 'coin',
          tickersCount: 694,
          marketCap: 424283071291.3707,
          fullyDilutedMarketCap: 424283071291.3707,
          availableSupply: 117855381,
          totalSupply: 117855381,
          icon: 'https://img.tstapi.cryptorank.io/coins/icon.ethereum1524754015525.png',
          image: 'https://img.tstapi.cryptorank.io/coins/ethereum1524754015525.png',
          tokens: [],
          category: 'Blockchain infrastructure',
          categoryId: 44,
          volume24h: 1324711.3492,
          price: { USD: 3600.03139179, BTC: 0.065619069112, ETH: 1 },
          histPrices: {
            '30D': [Object],
            '3M': [Object],
            '24H': [Object],
            '1Y': [Object],
            YTD: [Object],
            '6M': [Object]
          },
          athPrice: {
            BTC: 0.156,
            ETH: 1,
            USD: 4372.19533052,
            date: '2021-05-12',
            dateBTC: '2017-06-18',
            dateETH: '2015-08-17',
            marketCap: 506492595868.7589
          },
          volatility: { USD: 5.0749846, BTC: 2.2129753 }
        }];
})

describe("Testing fetcher functions", () => {
  test('should return a dictionary object containing USD and BTC', () => {
    fetchCoins.mockReturnValue(coinsObject);

    const result = fetchCoins();

    expect(Object.keys(result)).toEqual(["USD", "BTC"]);
    expect(Object.keys(result)).not.toContain("ETH");
  });

  test('should return an array with two currencies', () => {
    fetchCurrencies.mockReturnValue(currenciesArray);

    const result = fetchCurrencies();

    expect(result.length).toBe(2);
  });

  test('should have a price', () => {
    fetchCoins.mockReturnValue(coinsObject);

    const result = fetchCoins();

    const currencyObject = Object.entries(result)[0][1];

    expect(currencyObject.price).toBeGreaterThan(0);
  });

  test('should have a market cap', () => {
    fetchCoins.mockReturnValue(coinsObject);

    const result = fetchCoins();

    const currencyObject = Object.entries(result)[0][1];

    expect(currencyObject.marketCap).toBeGreaterThan(100000);
  });

  test('should have a rank', () => {
    fetchCurrencies.mockReturnValue(currenciesArray);

    const result = fetchCurrencies();

    expect(result[0].rank).toBeGreaterThan(0);
  });

  test('should have prices in USD, BTC, ETH', () => {
    fetchCurrencies.mockReturnValue(currenciesArray);

    const result = fetchCurrencies();

    expect(Object.keys(result[0].price)).toEqual(["USD", "BTC", "ETH"]);
  });
});