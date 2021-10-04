import React from 'react';

function ChartRow(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.price}</td>
                    <td>{props.discount}</td>
                    <td>{props.quantity}</td>
                    <td>{props.category.name}</td>
                </tr>
            )
    }

export default ChartRow;