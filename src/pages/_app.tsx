import '@/styles/globals.css';
import '@/styles/shared/alerts.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
