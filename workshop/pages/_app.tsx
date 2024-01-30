import Layout from "@/components/Layout";
import SearchProvider from "@/components/contexts/SearchProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <SearchProvider>
    <header>
        <Link className='p-5 text-5xl' href={'/'}>Cool Recipe App</Link>
    </header>

    <main>
      <Component {...pageProps} />
    </main>
  </SearchProvider>
  </Layout>
  );
}
