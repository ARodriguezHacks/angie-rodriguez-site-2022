import Navigation from "../components/Navigation";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
