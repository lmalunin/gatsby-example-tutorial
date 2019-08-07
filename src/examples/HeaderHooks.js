import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

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

const HeaderHooks = () => {
    const { site: { siteMetadata: info } } = useStaticQuery(getData);

    return (
        <div>
            <h1>author: {info.author}</h1>
            <h1>title: {info.siteTitle}</h1>
        </div>
    )
}

export default HeaderHooks
