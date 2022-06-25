import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AuthenticatedLayout, VerticalContainer } from '../components';

export default function SettingsPage() {
  return (
    <VerticalContainer className="p-4">
      <Head>
        <title>Bullsfirst | Next.js</title>
        <meta name="description" content="Settings Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Settings</h2>
      <Link href="/accounts">
        <a className="link mt-6">Back to Accounts</a>
      </Link>
    </VerticalContainer>
  );
}

SettingsPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthenticatedLayout>{page}</AuthenticatedLayout>;
};
