import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from './../components/layout'
import Image from 'gatsby-image'
import { FaMoneyBillWave, FaMap } from 'react-icons'


const TourTemplate = ({ data }) => {

    const { name, price, country, days, description, images, start, journey } = data.tour

    return (
        <Layout>
            <section>
                <div style={{ width: '300px' }}>
                    {images.map((item, index) => (
                        <Image key={index} fluid={item.fluid} alt={name} />
                    ))}
                </div>
                <h2>{name}</h2>
                <div>
                    <p>
                        starting from ${price}
                    </p>
                    <p>
                        {country}
                    </p>
                </div>
                <h4>starts on: {start}</h4>
                <h4>duration: {days}</h4>
                <p>description: {description}</p>
                <ul>
                    {journey.map((item, index) => (
                        <li key={index} >
                            {item.day}
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query ($slug: String) {
        tour: contentfulTour(slug: {eq: $slug}) {
            name
            price
            country
            days
            start(formatString: "dddd MMMM Do, YYYY")
            journey {
            day
            info
            }
            description
            images {
                fluid {
                    ...GatsbyContentfulFluid_withWebp
                }
            }
        }
    }
`;

export default TourTemplate
