import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'; 

class PageNav extends React.Component {
    render() {
        const nav = ['商户', '闪惠团购'];
        return (
            <nav className="page-nav">
                <ul className="clearfix">
                {
                    nav.map((item, index) => 
                        <li key={index}><Link to="/">{item}</Link></li>
                    )
                }
                </ul>
            </nav>
        )
    }
}

export default PageNav;