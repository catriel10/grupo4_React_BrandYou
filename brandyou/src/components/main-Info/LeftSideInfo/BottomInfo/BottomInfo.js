import { useState, useEffect } from 'react'
import './style-bottomInfo.css'

function BottomInfo(params) {
    const [lastUser, setlastUser] = useState(null)
    useEffect(() => {

        fetch('http://localhost:4444/api/users/last')
            .then(response => response.json())
            .then(data => {
               setlastUser(
                    data.data.users
                )
            console.log(data.data)
            })
    }, [])

    return (
        <>
            <section className='bottomInfoWrapper'>
                <div className='topInfoTitle'>
                    <h4>Last user in Data Base</h4>
                </div>

                {lastUser &&
                    <>
                        <div className='userData'>
                            <div className='userImage'>
                                <img className='image' src={`http://localhost:4444/img/users/${lastUser.image}`} alt='holay' />
                            </div>
                            <div className='userPersonalData'>
                                <ul>
                                    <li><h4>Id: {lastUser.id}</h4></li>
                                    <li><h4>Name: {lastUser.name}</h4> </li>
                                    <li><h4>Lastname: {lastUser.lastname}</h4> </li>
                                    <li><h4>Email: {lastUser.email}</h4></li>
                                    <li><h4>Address: {lastUser.address}</h4></li>
                                </ul>

                            </div>
                        </div>
                    </>
                }

            </section>
        </>
    )
}
export default BottomInfo