import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css'
import Header from './layouts/Header';
import Footer from './layouts/Footer';

export default function MyApp({ Component, pageProps }) {
    return (
      <>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    )
  }