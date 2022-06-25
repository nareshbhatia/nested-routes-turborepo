import { Outlet } from '@remix-run/react';
import { AccountHeader, VerticalContainer } from '~/components';

export default function AccountView() {
  return (
    <VerticalContainer>
      <AccountHeader />
      <Outlet />
    </VerticalContainer>
  );
}
