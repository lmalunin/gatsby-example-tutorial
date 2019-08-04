import React from "react"
import { Link } from "gatsby";
import Layout from './../components/layout';

export default () =>
    (<Layout>
        <div>Home page</div>
        <Link to="/blog">Blog page</Link>
    </Layout>)
