import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let productsInDB = {
    title: 'Product in Data Base',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let totalCategories = {
    title:' Total categories', 
    color:'success', 
    cuantity: '79',
    icon:'fa-award'
}

/* <!-- Actors quantity --> */

let usersQuantity = {
    title:'Users quantity' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-user-check'
}

let cartProps = [productsInDB, totalCategories, usersQuantity];

function ContentRowProducts(){
    return (
    
        <div className="row">
            
            {cartProps.map( (product, i) => {

                return <SmallCard {...product} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowProducts;