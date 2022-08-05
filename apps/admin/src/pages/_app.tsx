import '../../styles/globals.css'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const AnyComponent = Component as any;
  console.log("supp g")
  return <AnyComponent {...pageProps} />;
}

export default MyApp
