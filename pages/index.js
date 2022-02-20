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
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Search placeholder="Search" />
      </div>
    </div>
  );
}
