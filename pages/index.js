import Head from 'next/head';
// import Link from 'next/link';

import Search from '../components/Search/Search';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Snapstock Mulligan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Snapstock</h1>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Search />
      </div>
    </div>
  );
}
