/* eslint-disable jsx-a11y/alt-text */
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Card } from '../card/Card'

import "./style.css"

function Category({ name, categoryId }) {
    return (
        <Card>
            <article className='category'>
                <Link to={`/category/${categoryId}`}>
                    <h2>{name}</h2>
                </Link>
            </article>
        </Card>
    )
}


Category.propTypes = {
    name: PropTypes.string.isRequired,
    categoryId: PropTypes.number.isRequired,
}

export default Category