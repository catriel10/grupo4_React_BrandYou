import { useEffect, useState, useMemo } from 'react'
import { Code } from 'react-content-loader'
import { API_USERS } from '../../config'
import User from '../../components/user/User'
import "./style.css"


export default function UserList() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    // componentDidMount
    useEffect(() => {
        fetch(API_USERS)
            .then(res => res.json())
            .then(data => {
                setUsers(data.data.users)
                setLoading(false)  
            })
    }, [])

    const usersQuantity = useMemo(() => {
        // codigo
        return users.length
    }, [users.length])

    return (
        <>
            <section className='users'>

                { loading ? (
                    <Code
                        height={140}
                        speed={1}
                        backgroundColor={'#333'}
                        foregroundColor={'#999'}
                    />
                ) : (
                    <>
                        <h2>Tenemos {usersQuantity} users:</h2>
                        
                        {users.map(user => {
                            return (
                                <User 
                                    title={user.name} 
                                    image={user.image} 
                                    key={`user-${user.id}`}
                                    userId={user.id}
                                />
                            )
                        })}
                    
                    </>
                )}
                
            </section>
        </>
    )
}