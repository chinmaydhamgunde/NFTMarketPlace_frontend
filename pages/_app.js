import "../styles/global.css";
import { NavBar, Footer } from "../components/componentIndex";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
  </div>
);

export default MyApp;
