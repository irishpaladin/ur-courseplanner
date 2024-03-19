import { Outlet, Link } from "react-router-dom";
import LogoutButton from './LogoutButton';

const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/scheduler">Scheduler</Link>
          </li>
          <li>
            <Link to="/alerts">Alerts</Link>
          </li>
          <li>
            <Link to="/requirements">Requirements</Link>
          </li>
          <li>
            <LogoutButton/>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Navigation;