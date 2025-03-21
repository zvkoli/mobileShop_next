import '../../styles/globals.css';
import '../../styles/menubar.css';
import '../../styles/aboutmessage.css';
import '../../styles/sliderrange.css';
import '../../styles/selectmodelproduct.css';
import Layout from '../components/layout/Layout';
import { SessionProvider } from 'next-auth/react';

const MyApp = ({ Component , pageProps }) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
