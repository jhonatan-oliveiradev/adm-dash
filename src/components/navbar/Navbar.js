import avatar from '../../assets/avatar.png';
import './Navbar.css';

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-icon" onClick={() => openSidebar()}>
        <i className="fas fa-bars" aria-hidden="true"></i>
      </div>

      <div className="navbar__left">
        <a href="#">Produtos</a>
        <a href="#">Usuários</a>
        <a href="#" className="active-link">
          Admin
        </a>
      </div>

      <div className="navbar__right">
        <a href="#">
          <i className="fas fa-search" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i class="fa fa-hourglass-half" aria-hidden="true"></i>
        </a>
        <a href="#">
          <img width="30" src={avatar} alt="avatar"></img>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
