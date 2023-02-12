import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar (){
    return(
    <div className="Navbar">
        <nav>
        <h1>My Project</h1>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/create">New Blog</Link></li>
        </ul>
        </nav>
    </div>)
}
export default Navbar;