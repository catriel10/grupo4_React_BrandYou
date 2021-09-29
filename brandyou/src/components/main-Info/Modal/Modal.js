import './style-modal.css'

function Modal(props, { onClickClose }) {

	return (
		<>
			{props.info.data &&

				< div id="openModal" class="modalDialog">
					<div>
						<button onClick={props.onClickClose} title="Close" class="close">X</button>
						<h2>Product detail</h2>
						<div className='contentWrapper'>
							<div className='imageContainer'>
								<img className='productImg' src={`${props.info.data.image}`} alt='productImg' />
							</div>
							<div className='infoContainer'>
								<h4>Name: {props.info.data.name}</h4>
								<p>Category: {props.info.data.category.name}</p>
								<p>Quantity: {props.info.data.quantity}</p>
								<p>Price: ${props.info.data.price}</p>
								<p>Description: </p><p>{props.info.data.description}</p>
								<hr className='separador' />
								<button className='buttonToWeb'><a target="_blank" rel="noreferrer" href={`http://localhost:3000/product/detail/${props.info.data.id}`}>Ver en web</a></button>
							</div>
						</div>

					</div>
				</div>
			}
		</>
	)
}

export default Modal