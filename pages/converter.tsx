import Layout from '../components/common/Layout/Layout';
import Converter from '../components/uncommon/Converter/Converter';
import { fetchCurrencies } from "../helpers/fetcher/fetcher";
import { wrapper } from '../redux/store';

export default function ConverterPage() {
  return <Layout>
    <Converter />
  </Layout>
}

export const getServerSideProps = wrapper.getServerSideProps((store): any => async ({req, res}: any) => {
  try {
    const currenciesListObject = await fetchCurrencies();
    
    store.dispatch({type: "converter/setCurrenciesLists", payload: {
      availableCurrenciesFrom: currenciesListObject || {}, 
      availableCurrenciesTo: currenciesListObject || {},
      selectedCurrencyFrom: Object.keys(currenciesListObject)[1],
      selectedCurrencyTo: Object.keys(currenciesListObject)[0],
    }});
  } catch (error) {
    console.error(error);
  } finally {
    return { props: {} };
  }
});