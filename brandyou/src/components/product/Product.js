/* eslint-disable jsx-a11y/alt-text */
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import {SmallCard} from '../smallcard/SmallCard'

import "./style.css"

function Product({ title, image, productId }) {
    return (
        <SmallCard>
            <article className='product'>
                <Link to={`/products/${productId}`}>
                    <h2>{title}</h2>
                    <img src={`${image}`} width="80%" />
                </Link>
            </article>
        </SmallCard>
    )
}

/* propTypes */
Product.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    productId: PropTypes.number.isRequired,
}

/* defaultProps */
Product.defaultProps = {
    image: 'silueta-femenina.jpeg'
}

export default Product