import './Sidebar.css';
import logo from '../../assets/logo.png';

const Sidebar = ({ sidebarOpen, openSidebar, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? 'sidebar-responsive' : ''} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logotipo da empresa" />
          <h1>ADM System</h1>
        </div>

        <i
          onClick={() => closeSidebar()}
          className="fas fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fas fa-minus-square"></i>
          <a href="#">Home</a>
        </div>
        <h2>ADMIN</h2>
        <div className="sidebar__link">
          <i className="fas fa-tachometer"></i>
          <a href="#">Área Administrativa</a>
        </div>
        <div className="sidebar__link">
          <i className="fas fa-building"></i>
          <a href="#">Lojas</a>
        </div>
        <div className="sidebar__link">
          <i className="fas fa-archive"></i>
          <a href="#">Produtos</a>
        </div>
        <div className="sidebar__link">
          <i className="fas fa-bars"></i>
          <a href="#">Categorias</a>
        </div>
        <div className="sidebar__link">
          <i className="fas fa-cutlery"></i>
          <a href="#">Pedidos</a>
        </div>
        <h2>PESSOAS</h2>
        <div className="sidebar__link">
          <i className="fas fa-male"></i>
          <a href="#">Administradores</a>
        </div>
        <div className="sidebar__link">
          <i className="fas fa-user-circle"></i>
          <a href="#">Usuários</a>
        </div>
        <div className="sidebar__link">
          <i className="fas fa-dollar"></i>
          <a href="#">Pagamentos e custos</a>
        </div>
        <div className="sidebar__link">
          <i className="fas fa-file-text"></i>
          <a href="#">Política de privacidade</a>
        </div>
        <div className="sidebar__logout">
          <i className="fas fa-power-off"></i>
          <a href="#">Log out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
