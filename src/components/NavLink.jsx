import React from 'react'
import {Link} from 'react-router-dom';

class NavLink extends React.Component {
    render() {
        const linkClass = {
            textDecoration : "none",
            color : "inherit"
         }
        const mainClass = this.props.to === this.props.pathname ? 'active' : ''
        return(
            <Link className={mainClass} style={{...linkClass}} {...this.props}>
                {this.props.children}
            </Link>
        );
    }
}

export default NavLink;
