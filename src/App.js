import './App.css';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import WelcomePage from './pages/WelcomePage';
import AuthenticatedPage from './pages/AuthenticatedPage';

function App() {
  const {isLoading, error} = useAuth0();
  return (
    <main className = "column">
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <WelcomePage/>
          <AuthenticatedPage/>
        </>
      )}
      
    </main>
  );
}

export default App;
