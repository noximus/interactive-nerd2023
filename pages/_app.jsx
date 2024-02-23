import { Provider } from "react-redux";
import store from "../store/store";
import "../styles/index.scss";
import Layout from "../components/Layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
