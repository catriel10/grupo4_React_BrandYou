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
                        <img src={`/${data.image}`} />
                        <p>{data.description}</p>
                    </div>
                    {/*<!-- <Link to={'/planet/4'}>Otro planeta</Link> -->*/}
                   
                </>
                )
            }
        </section>
    )
}