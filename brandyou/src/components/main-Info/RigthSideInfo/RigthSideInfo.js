import './style-rigthSideInfo.css'
import { useState, useEffect } from 'react'
import QuantityProducts from './quantityProducts'
/* import { Link } from 'react-router-dom' */

function RightSideInfo(params) {


    const [productByCategory, setproductByCategory] = useState([])
    useEffect(() => {
        fetch('http://localhost:4444/api/products/')
            .then(response => response.json())
            .then(data => {
                setproductByCategory(
                    data.data.objectCategories
                )
            })
    }, [])

    let qtyArray = Object.values(productByCategory)
    let categoryKeys = Object.keys(productByCategory)





    return (
        <>
            <aside className="rigthSideInfo">
                <section className='bottomInfoWrapper'>
                    <div className='rigthSideTitle'>
                        <h4>Categories</h4>
                    </div>
                    <div className='rigthSideCategories'>
                        <ul className='categoryList'>
                            {qtyArray.map((e, index) => {
                                return <li className='categoryElement' key={index}> {categoryKeys[index]}{<QuantityProducts qty={e} />}</li>
                            })}
                        </ul>
                    </div>
                </section>
            </aside>

        </>
    )
}
export default RightSideInfo