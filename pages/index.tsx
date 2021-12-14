import React from 'react';
import Heading from '../components/common/Heading/Heading';
import Layout from '../components/common/Layout/Layout';
import {calculateFromATH, calculateToATH} from '../helpers/calculator/calculator';

const HomePage = (props: any) => {
  return <Layout>
            <React.Fragment>
              <Heading>{props.msg1}</Heading>
              <Heading>{props.msg2}</Heading>
            </React.Fragment>
        </Layout>
};

export async function getServerSideProps(context: any) {
  // Deliberately called separately which takes more time
  const msg1 = await calculateFromATH();
  const msg2 = await calculateToATH();

  return {
    props: {msg1, msg2}
  }
}

export default HomePage;