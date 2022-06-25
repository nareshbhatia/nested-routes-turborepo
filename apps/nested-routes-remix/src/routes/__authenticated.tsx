import { Outlet } from '@remix-run/react';
import type { MetaFunction } from '@remix-run/node';
import { Header, ViewVerticalContainer } from '~/components';

export let meta: MetaFunction = () => {
  return {
    title: 'Bullsfirst | Remix',
    description: 'Application to trade securities and manage investments',
  };
};

export default function AuthenticatedPage() {
  return (
    <ViewVerticalContainer>
      <Header />
      <Outlet />
    </ViewVerticalContainer>
  );
}
