import { Link } from 'react-router-dom';

// @styling
import './userauthmenu.scss';

const UserAuthMenu = ({ showAuth, setShowAuth, handleLogout }) => {
  return (
    <div className='user__authmenu'>
      <div
        className='user__authmenu__container'
        onMouseLeave={() => setShowAuth(!showAuth)}
      >
        <ul>
          <Link to='/dashboard'>
            <li>Dashboard</li>
          </Link>
          <li onClick={handleLogout} className='logout'>
            Sign Out
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserAuthMenu;
