import { useAuth0 } from '@auth0/auth0-react';

const WelcomePage = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <div>
                <h1>This is WelcomePage</h1>
                <button onClick={() => loginWithRedirect()}>
                    Sign In
                </button>
            </div>
        )
    )
}

export default WelcomePage