/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Code } from 'react-content-loader'
import { API_USERS_DETAIL } from '../../config'
import "./style.css"

export default function UserDetail() {
    const { id } = useParams()

    const [userDetail, setUserDetail] = useState({
        data: null,
        loading: true,
    })
    useEffect(() => {  
        fetch(`${API_USERS_DETAIL}${id}`)
            .then(res => res.json())
            .then(userApi => {
                setUserDetail({
                    loading: false,
                    data: userApi.data.product,
                })
            })
    }, [id])
    
    const { loading, data } = userDetail

    return (
        <section class="user-detail">
            { loading ? (
                    <Code
                        height={140}
                        speed={1}
                        backgroundColor={'#333'}
                        foregroundColor={'#999'}
                    />
                ) : (
                <>
                    <h3>{data.name}</h3>
                    <div className="columns">
                        <img src={`/${data.image}`} />
                        <p>{data.email}</p>
                        <p>{data.name}</p>
                        <p>{data.lastname}</p>
                    </div>
                    <Link to={'/user/2'}>Another user</Link>
                   
                </>
                )
            }
        </section>
    )
}