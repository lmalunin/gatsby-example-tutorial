import React from 'react'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import { FaMap } from 'react-icons/fa';
import PropTypes from 'prop-types'

const Tour = ({ tour }) => {

    const { name, price, country, days, slug, images } = tour;

    const mainImage = images[0].fluid;

    return (
        <>
            <div style={{ width: '300px' }}>
                <Image fluid={mainImage} alt={name} />
                <h3>{name}</h3>
                <FaMap></FaMap>
                Counry:{country}
                Days:{days}
                Price:{price}
                <Link to={`/tours/${slug}`}>Details</Link>
            </div>
        </>
    )
}

Tour.propTypes = {
    tour: PropTypes.shape({
        name: PropTypes.string.isRequired
    })
}

export default Tour
