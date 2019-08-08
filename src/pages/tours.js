import React from 'react'
import Tours from './../components/Tours/Tours'
import Layout from './../components/layout'

const tours = ({ data }) => {
    return (
        <Layout>
            <Tours tours={data.tours.edges}></Tours>
        </Layout>
    )
}

export const getTours = graphql`
    query {
    tours: allContentfulTour {
        edges {
            node {
                name
                price
                slug
                country
                id: contentful_id
                days
                images {
                    fluid {
                        ...GatsbyContentfulFluid_tracedSVG
                    }
                }
            }
            }
        }
    }
`;

export default tours
