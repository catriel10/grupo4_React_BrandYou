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
                    data: userApi.data.user,
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
                        <img src={`/${data.image}`} width="40%"/>
                        <ul><p>em@il: {data.email}</p></ul>

                        <ul><p>Name: {data.name}</p></ul>

                        <ul><p>Lastname: {data.lastname}</p></ul>
                    </div>
                    <Link to={'/users/3'}>Another user</Link>
                   
                </>
                )
            }
        </section>
    )
}