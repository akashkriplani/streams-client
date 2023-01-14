import { useState, useEffect } from 'react';

const GoogleAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState(null);

  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: '512424745123-kggfsambomm5scvqpfeksu3orj4bmird.apps.googleusercontent.com',
          scope: 'email',
          plugin_name: 'Stream Client'
        })
        .then(() => {
          const auth = window.gapi.auth2.getAuthInstance();
          setIsSignedIn(auth.isSignedIn.get());
          auth.isSignedIn.listen(() => setIsSignedIn(auth.isSignedIn.get()));
        });
    });
  }, []);

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  };

  return <div>{renderAuthButton()}</div>;
};

export default GoogleAuth;
