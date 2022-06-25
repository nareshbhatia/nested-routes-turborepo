import { Link } from '@remix-run/react';
import { VerticalContainer } from '~/components';

export default function SettingsView() {
  const throwError = () => {
    throw new Error('Intentionally throwing an error');
  };

  return (
    <VerticalContainer className="p-4">
      <h2>Settings</h2>
      <div className="mt-4">
        <button
          className="border border-gray-400 px-4 py-2"
          onClick={throwError}
        >
          Throw an error
        </button>
      </div>
      <Link className="link mt-6" to="/accounts">
        Back to Accounts
      </Link>
    </VerticalContainer>
  );

  return (
    <VerticalContainer className="p-4">
      <h2>Settings</h2>
      <Link className="link mt-4" to="/accounts">
        Back to Accounts
      </Link>
    </VerticalContainer>
  );
}
