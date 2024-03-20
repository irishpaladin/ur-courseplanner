import { Outlet, Link } from "react-router-dom";
import logo from '../assets/icon.png';
import { useAuth0 } from '@auth0/auth0-react';

const Navigation = () => {
  const { logout } = useAuth0();
  return (
    <>
      <div className="navigation-bar">
        <table class="">
        <thead>
          <tr>
            <td class="nav-logo"><Link className="nav-link" to="/"><img src={logo} className="img-logo" alt="logo" /></Link></td>
            <td class="nav"><Link className="nav-link" to="/">Home</Link></td>
            <td class="nav"><Link className="nav-link" to="/scheduler">Scheduler</Link></td>
            <td class="nav"><Link className="nav-link" to="/alerts">Alerts</Link></td>
            <td class="nav"><Link className="nav-link" to="/requirements">Requirements</Link></td>
            <td class="nav"><a className="nav-link" href="" onClick={() => logout()}>Logout</a></td>
          </tr>
        </thead>
        </table>
      </div>
      <div className="nav-bar"/>
      <Outlet />
    </>
  )
};

export default Navigation;