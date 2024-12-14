'use client';

import Head from 'next/head';

import ScrollToTop from '../components/scroll-to-top';

const Index = () => {
	return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1'/>
        <title> Home | Scroll to Top</title>
      </Head>

      <main>
        <ScrollToTop />
      </main>
    </>
  );
};

export default Index;