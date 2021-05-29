import { Link } from 'gatsby'
import * as React from 'react'
import {
     container,
     heading,
    navlinks,
    navlinkitem,
    navlinktext
} from './layout.module.css'

const Layout = ({pageTitle, children}) => {
    return(
        <main className={container}>
            <title>{pageTitle}</title>
            <nav>
                <ul className={navlinks}>
                    <li className={navlinkitem}>
                        <Link to="/" className={navlinktext}>Home</Link>
                    </li>
                    <li className={navlinkitem}>
                        <Link to="/about" className={navlinktext}>About</Link>
                    </li>
                </ul>
            </nav>
            <h1 className={heading}>{pageTitle}</h1>
            {children} 
        </main>
    )
}

export default Layout