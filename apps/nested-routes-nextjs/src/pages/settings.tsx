import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AuthenticatedLayout, VerticalContainer } from '../components';

export default function SettingsPage() {
  const throwError = () => {
    throw new Error('Intentionally throwing an error');
  };

  return (
    <VerticalContainer className="p-4">
      <Head>
        <title>Bullsfirst | Next.js</title>
        <meta name="description" content="Settings Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Settings</h2>
      <div className="mt-4">
        <button
          className="border border-gray-400 px-4 py-2"
          onClick={throwError}
        >
          Throw an error
        </button>
      </div>
      <Link href="/accounts">
        <a className="link mt-6">Back to Accounts</a>
      </Link>
    </VerticalContainer>
  );
}

SettingsPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthenticatedLayout>{page}</AuthenticatedLayout>;
};
