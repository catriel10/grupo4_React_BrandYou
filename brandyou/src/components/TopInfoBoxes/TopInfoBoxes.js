import './style-topinfobox.css'
import { useState, useEffect } from 'react'
import InfoBox from './infoBox/infoBox'


function TopInfoBox(params) {

	//los estados de los fetch 
	const [products, setProductos] = useState([])
	const [category, setCategory] = useState([])
	const [users, setUsers] = useState([])
	//nombre de la info 
	const boxName = ['Productos', 'Categorias', 'Usuarios']

	useEffect(() => {
		fetch('http://localhost:4444/api/products/')
			.then(response => response.json())
			.then(data => {
				setProductos(
					data.meta.total
				)
			})
	}, [])

	useEffect(() => {
		fetch('http://localhost:4444/api/products/')
			.then(response => response.json())
			.then(data => {
				setCategory(
					data.data.categories
				)
			})

	}, [])

	useEffect(() => {
		fetch('http://localhost:4444/api/users/')
			.then(response => response.json())
			.then(data => {
				setUsers(
					data.meta.total
				)
			})
	}, [])

	//agrego la info de los 3 fetch a un array para pasarselo a la vista en un map 
	const info = [products, category, users]
	return (
		<>
			<section className='infoBoxesContainer'>
				{boxName.map((e, i) => {

					return <InfoBox
						info={info[i]}
						name={e}
					/>
				})}
			</section>
		</>
	)
}
export default TopInfoBox