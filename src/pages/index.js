import React from "react"
import { Link } from "gatsby";
import Layout from './../components/layout';
import { Button } from './../components/button';

export default () =>
    (<Layout>
        <div>Home page</div>
        <Link to="/blog">Blog page</Link>
        <Button>styled button</Button>
    </Layout>)
