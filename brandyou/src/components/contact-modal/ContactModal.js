import { useEffect, useRef } from 'react'
import './style.css'
import Close from './close.png'

export function ContactModal({ onClickClose }) {
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    } , [])
        
    return (
        <aside id="contact-modal">
            <div className="contact-wrapper">
                
                <h4>Contact</h4>
                <p>Direction: Paraná 3745, Martínez, Buenos Aires, Argentina</p>
                <p>Tel: (011) 4733-1111</p>
                
                <form>
                    <input ref={inputRef} placeholder="Enter your email"></input>
                </form>

                <div onClick={onClickClose} className="close">
                    <img width="30" src={Close} />
                </div>
            </div>
        </aside>
    )
}