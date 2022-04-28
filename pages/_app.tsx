import "../assets/main.sass";

type AppProps = {
  Component: React.FC;
  pageProps: object;
};

const App: React.FC = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
