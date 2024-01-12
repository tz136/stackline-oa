import logo from '../assets/stackline_logo.svg';
import '../styles.css';

const Header = () => {
  return (
    <div className="header">
         <img src={logo} className="logo" alt="logo" />
    </div>
  );
}

export default Header;
