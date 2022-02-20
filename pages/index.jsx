import Head from 'next/head';
import Header from '../components/Header/Header';
// import Link from 'next/link';

import Search from '../components/Search/Search';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Snapstock Mulligan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello World</h1>
    </div>
  );
}
