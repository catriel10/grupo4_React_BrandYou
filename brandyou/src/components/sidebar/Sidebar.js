import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
import Logo from '../../assets/images/Logo-Brand-You-New.png'
import { ContactModal } from '../contact-modal/ContactModal'

export default class Sidebar extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            displayContactModal: false,
        }
    }

    toggleContactModal() {
        this.setState({
            displayContactModal: !this.state.displayContactModal
        })
    }


    render() {
        const { title, subtitle } = this.props
        const { displayContactModal } = this.state

        return (
            <>
                <nav>
                    <img src={Logo} alt="logo" width="80%"/>
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
    
                    <Link to='/products'>Products</Link>
                    <Link to='/Users'>Users</Link>
                    <Link to='/Categories'>Categories</Link>
                    <Link to='/LastProductInDB'>Last Product</Link>
                    <Link to='/about'>About</Link>
                    <a onClick={() => this.toggleContactModal()} href="#">Contact</a>
                    
                </nav>   

                {displayContactModal && <ContactModal onClickClose={() => this.toggleContactModal()} />}
            </>
        )
    }

    
}