import React from 'react'
import HeaderHooks from '../examples/HeaderHooks'
import HeaderStatic from '../examples/HeaderStatic'
import { graphql } from "gatsby"

const examples = (props) => {

    const person = props.data.site.siteMetadata.person;

    return (
        <div>
            examples page
            <HeaderHooks />
            <HeaderStatic />

            <h1>{person[0]}</h1>
        </div>
    )
}

export const getData = graphql`
    query {
        site {
            siteMetadata {
            person: data
            siteTitle: title
            author
            description
            }
        }
    }
`;

export default examples
