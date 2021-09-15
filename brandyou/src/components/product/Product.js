import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Card } from '../card/Card'

import "./style.css"

function Product({ title, image, productId }) {
    return (
        <Card>
            <article className='product'>
                <Link to={`/product/${productId}`}>
                    <h2>{title}</h2>
                    <img src={`/${image}`} width="100%" />
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
    image: 'silueta-femenina.jpg'
}

export default Product