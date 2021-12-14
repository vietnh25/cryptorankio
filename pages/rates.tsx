import Layout from '../components/common/Layout/Layout'
import Rates from '../components/uncommon/Rates/Rates';
import { fetchCoins } from "../helpers/fetcher/fetcher";
import { wrapper } from '../redux/store';

export default function RatesPage() {
  return <Layout>
    <Rates />
  </Layout>
}

export const getServerSideProps = wrapper.getServerSideProps((store): any => async ({ req, res }: any) => {
  try {
    const currenciesListObject = await fetchCoins();

    store.dispatch({
      type: "watchlist/setCurrenciesList", payload: {
        currencies: currenciesListObject
      }
    });
  } catch (error) {
    console.error(error);
  } finally {
    return { props: {} };
  }
});