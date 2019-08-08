import React from 'react'
import Tour from './Tour'
import { FaHome, FaDivide } from "react-icons/fa";

const Tours = ({ tours }) => {

    return (
        <>
            <section>
                {tours.map((({ node }) => (
                    <Tour key={node.id} tour={node} />
                )))}
            </section>
            <FaHome />
        </>
    )
}

export default Tours
