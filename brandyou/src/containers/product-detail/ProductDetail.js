/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Code } from 'react-content-loader'
import { API_PRODUCTS_DETAIL } from '../../config'
import "./style.css"

export default function ProductDetail() {
    const { id } = useParams()

    const [productDetail, setProductDetail] = useState({
        data: null,
        loading: true,
    })
    useEffect(() => {  
        fetch(`${API_PRODUCTS_DETAIL}${id}`)
            .then(res => res.json())
            .then(productApi => {
                setProductDetail({
                    loading: false,
                    data: productApi.data.product,
                })
            })
    }, [id])
    
    const { loading, data } = productDetail

    return (
        <section class="product-detail">
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
                        {/* <img src={`${data.image}`} width="30%"/> */}
                        <p>Name: {data.name}</p>
                        <p>Price: {data.price}</p>
                        <p>Discount: {data.discount}</p>
                        <p>Quantity: {data.quantity}</p>
                    </div>
                    <Link to={'/products/'}><i class="far fa-arrow-alt-circle-left"></i>Back</Link>
                   
                </>
                )
            }
        </section>
    )
}