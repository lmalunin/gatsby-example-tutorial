import React from 'react'
import { StaticQuery, graphql } from "gatsby"

const getData = graphql`
    query {
        site {
            siteMetadata {
            data
            siteTitle: title
            author
            description
            }
        }
    }
`;

const HeaderStatic = () => {

    return (
        <StaticQuery
            query={getData}
            render={
                ({ site: { siteMetadata: info } }) => {
                    return (
                        <>
                            <h1>author: {info.author}</h1>
                            <h1>title: {info.description}</h1>
                        </>
                    )
                }
            }
        />
    )
}

export default HeaderStatic
