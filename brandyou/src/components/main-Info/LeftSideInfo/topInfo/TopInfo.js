import { useState, useEffect } from 'react'
import './style-topInfo.css'
//import Modal from '../../Modal/Modal'

/* import { Link } from 'react-router-dom' */
function TopInfo(params) {
    const [lastProduct, setLastProduct] = useState(null)

    useEffect(() => {
        fetch('http://localhost:4444/api/products/last')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setLastProduct(
                    data.data.products
                )
                console.log(lastProduct)
            })
    }, [])

    const [displayProductModal, setDisplayProductModal] = useState(false)

    // function showProductModal(params) {
    //     setDisplayProductModal(true)
    // }
    // function hideProductModal(params) {
    //     setDisplayProductModal(false)
    // }


    return (
        <>
            <section className='topInfoWrapper'>
                <div className='topInfoTitle'>
                    <h4>
                        Last product in Data Base
                    </h4>
                </div>

                {lastProduct &&
                    <div className='lastProductData'>
                        <div className='userImage'>
                            <img className='productImage' src={lastProduct.image} alt='last product' />
                        </div>
                        <div className='lastData'>
                            <ul>
                                <li><h4>Id:{lastProduct.id}</h4></li>
                                <li><h3>{lastProduct.name}</h3></li>
                                <li><h4>Price: {lastProduct.price}</h4></li>
                                <li><h4>Discount: {lastProduct.discount}</h4></li>
                                <li><h4>Quantity: {lastProduct.quantity}</h4></li>
                            </ul>

                        </div>
                    </div>
                }
            </section>
        </>
    )
}
export default TopInfo