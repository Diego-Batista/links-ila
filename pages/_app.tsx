import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { Layout } from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo
        title="Links Ila | Nutricionista: Ila Bittencourt"
        description="Nutrição funcional e ortomolecular, agende sua consulta."
        openGraph={{
          type: "website",
          locale: "pt_BR",
          url: "https://links-ila.vercel.app/",
          siteName: "Links Nutricionista Ila Bittencourt",
        }}
      />
      <NextNProgress
        color="#a87b05"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        showOnShallow={true}
      />
        <Layout />
        <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
