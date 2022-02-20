import Header from '../components/Header/Header';
import './styles.css';

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
