import { Link } from 'react-router-dom';
import './Components.css';

const Navbar = () => {
    return (
    <nav className = "nav">
        <ul className ="nav-ul">
            <li><Link to="/"> Home </Link></li>
            <li><Link to="/about"> About </Link></li>
            <li><Link to="/projects"> Projects </Link></li>
            <li><Link to="/contact"> Contact </Link></li>
        </ul>
    </nav>
    );
};

export default Navbar;