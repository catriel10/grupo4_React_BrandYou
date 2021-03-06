import { useEffect, useState, useMemo } from 'react'
import { Code } from 'react-content-loader'
import { API_PRODUCTS } from '../../config'
import Product from '../../components/product/Product'
import "../product-list/style.css"
// import Modal from '../../components/Modal/Modal'
// import { Link } from 'react-router-dom'

export default function ProductList() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    // componentDidMount
    useEffect(() => {
        fetch(API_PRODUCTS)
            .then(res => res.json())
            .then(data => {
                setProducts(data.data.products)
                setLoading(false)  
            })
    }, [])

     const productsQuantity = useMemo(() => {
        // codigo
        return products.length
    }, [products.length])
        // El key se usa para que renderize solo el elemento que deberia
    return (
        <>
            <section className='products'>

                { loading ? (
                    <Code
                        height={140}
                        speed={1}
                        backgroundColor={'#333'}
                        foregroundColor={'#999'}
                    />
                ) : (
                    <>
                        <h2>Tenemos {productsQuantity} products:</h2>

                        {products.map(product => {
                            return (
                                <Product 
                                    title={product.name} 
                                    image={product.image}
                                    price={product.price}  
                                    key={`product-${product.id}`}
                                    productId={product.id}
                                />
                            )
                        })}
                    
                    </>
                )}
                
            </section>
        </>
    )
}
