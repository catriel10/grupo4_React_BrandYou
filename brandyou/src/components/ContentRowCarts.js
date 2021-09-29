import React from 'react';
import { useState, useEffect } from 'react'
import SmallCard from './SmallCard';

function ContentRowProducts(params) {

	//los estados de los fetch 
	
    const [products, setProductos] = useState([])
	const [category, setCategory] = useState([])
	const [users, setUsers] = useState([])
	
    //nombre de la info 

	const cartProps = ['products', 'category', 'users']

	useEffect(() => {
		fetch('http://localhost:444/api/products/')
			.then(response => response.json())
			.then(data => {
				setProductos(
					data.data
				)
			})
	}, [])

	useEffect(() => {
		fetch('http://localhost:4444/api/category')
			.then(response => response.json())
			.then(data => {
				setCategory(
					data.meta.total
				)
			})

	}, [])

	useEffect(() => {
		fetch('http://localhost:4444/api/users/')
			.then(response => response.json())
			.then(data => {
				setUsers(
					data.data
				)
			})
	}, [])

    return (
    
        <div className="row">
            
            {cartProps.map( (product, i) => {

                return <SmallCard {...product} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowProducts;