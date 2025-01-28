import "./index.css"

import {Link} from 'react-router-dom'

const Header=()=>{
    return(
        <div className="fluid-container">
            <h1>Blogs</h1>
            <div className="row">
                <ul className="row">
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header