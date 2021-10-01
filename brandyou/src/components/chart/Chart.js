import React from 'react';
import ChartRow from './ChartRow';
import { useEffect, useState } from 'react'
import { API_PRODUCTS } from '../../config'

// let tableRowsData = [
//     {
//         Title: 'Billy Elliot ',
//         Length: '123',
//         Rating: '5',
//         Categories: ['Drama','Comedia'],
//         Awards: 2
//     },
//     {
//         Title: 'Alicia en el país de las maravillas',
//         Length: '142',
//         Rating: '4.8',
//         Categories: ['Drama','Acción','Comedia'],
//         Awards: 3
//     },
    
// ]

function Chart (){
// componentDidMount
const [products, setProducts] = useState([])
const [loading, setLoading] = useState(true)

useEffect(() => {
    fetch(API_PRODUCTS)
        .then(res => res.json())
        .then(data => {
            setProducts(data.data.products)
            setLoading(false)  
        })
}, [])



    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Discount</th>
                                <th>Quantity</th>
                                <th>Category</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Discount</th>
                                <th>Quantity</th>
                                <th>Category</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            products.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;