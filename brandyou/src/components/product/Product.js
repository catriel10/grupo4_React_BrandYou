/* eslint-disable jsx-a11y/alt-text */
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Card } from '../card/Card'

import "./style.css"

function Product({ title, image, productId }) {
    return (
        <Card>
            <article className='product'>
                <Link to={`/products/${productId}`}>
                    <h2>{title}</h2>
                    <img src={`/${image}`} width="80%" />
                </Link>
            </article>
        </Card>
    )
}


Product.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    productId: PropTypes.number.isRequired,
}


Product.defaultProps = {
    image: 'silueta-femenina.jpeg'
}

export default Product