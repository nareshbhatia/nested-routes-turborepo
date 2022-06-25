import { useNavigate } from '@remix-run/react';
import type { MetaFunction } from '@remix-run/node';
import { ViewCenteredContainer } from '~/components';
import logo from '~/assets/bullsfirst-logo.svg';

export let meta: MetaFunction = () => {
  return {
    title: 'Bullsfirst | Remix',
    description: 'Application to trade securities and manage investments',
  };
};

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <ViewCenteredContainer className="bg-gradient">
      <div className="flex flex-col items-center">
        <img src={logo} alt="logo" width="190" />
        <p className="mt-10 mb-10 text-3xl max-w-sm">
          Get better results with Bullsfirst at the helm of your portfolio.
        </p>
        <button
          className="px-5 py-3 rounded-lg shadow-lg bg-primary-main hover:bg-primary-600 hover:-translate-y-0.5 text-white transform transition uppercase tracking-wider font-semibold text-sm"
          onClick={() => navigate('/accounts')}
        >
          Show My Accounts
        </button>
      </div>
    </ViewCenteredContainer>
  );
}
