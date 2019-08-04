import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout';

export default class blog extends Component {
    render() {
        return (
            <Layout>
                <div>
                    Blog page
                </div>
                <div>
                    <Link to="/">Home</Link>
                </div>
            </Layout>
        )
    }
}
