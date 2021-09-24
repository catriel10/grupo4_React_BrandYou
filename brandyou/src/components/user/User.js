/* eslint-disable jsx-a11y/alt-text */
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Card } from '../card/Card'
import { SmallCard } from '../smallcard/SmallCard'

import "./style.css"

function User({ title, image, userId }) {
    return (
        <SmallCard>
            <article className='user'>
                <Link to={`/users/${userId}`}>
                    <h2>{title}</h2>
                    <img src={`/${image}`} width="80%" />
                </Link>
            </article>
        </SmallCard>
    )
}


User.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    userId: PropTypes.number.isRequired,
}


User.defaultProps = {
    image: 'img_avatar2.png'
}

export default User