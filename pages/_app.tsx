import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import NextNProgress from "nextjs-progressbar";
import '../styles/globals.css';
import { Layout } from './components/Layout';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider attribute="class">
      <Layout />
      <NextNProgress
          color="#a87b05"
          startPosition={0.3}
          stopDelayMs={200}
          height={4}
          showOnShallow={true}
        />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
