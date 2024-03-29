import React from 'react'
import { Link } from 'gatsby';
import styles from './../sass/navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <h2>Company</h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/examples">Examples</Link>
                </li>
                <li>
                    <Link to="/images">Images</Link>
                </li>
                <li>
                    <Link to="/tours">Tours</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
