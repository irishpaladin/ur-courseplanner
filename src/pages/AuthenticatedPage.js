import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from '../components/Navigation';
import Home from './Home';
import Scheduler from './Scheduler';
import Alerts from './Alerts';
import Requirements from './Requirements';
import NoPage from './NoPage';

const AuthenticatedPage = () => {
    const {isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div>
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path="scheduler" element={<Scheduler />} />
                    <Route path="alerts" element={<Alerts />} />
                    <Route path="requirements" element={<Requirements />} />
                    <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
                </BrowserRouter>
            </div>
        )
    )
}

export default AuthenticatedPage