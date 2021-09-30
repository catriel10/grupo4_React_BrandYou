import React from 'react';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function ChartRow(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.price}</td>
                    <td>{props.discount}</td>
                    <td>{props.quantity}</td>
                    <td>{props.discount}</td>
                </tr>
            )
    }
    
        

export default ChartRow;