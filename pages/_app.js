import '../styles/Shared.scss';
import '../styles/Globals.scss';
import '../styles/pages/Pages.scss';
import '../styles/components/Components.scss';

import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
