import React from 'react'
import './../css/Header.css';
import {Link} from "react-router-dom";

// function header() {

class header extends React.Component {
    render() {
        return(
            <header className="Header">
                <nav>
                    {/* <nav> */}
                    {/* <ul> */}
                        {/* <li><Link to='/spells'>Spells</Link></li> */}
                    {/* </ul> */}
                    {/* </nav> */}
                    <Link to='/'>Home</Link>
                    <Link to='/spells'>Spells</Link>
                </nav>
            </header>
        )
    }
}

export default header