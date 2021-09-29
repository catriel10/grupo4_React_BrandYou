import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.price}</td>
                    <td>{props.discount}</td>
                    <td>{props.quantity}</td>
                    <td>{props.discount}</td>
                    <td>
                        <ul>
                            {props.Categories.map( (category,i) => 
                                <li key={`category ${i}`}>{category}</li>
                            )}
                        </ul>
                    </td>
                </tr>
            )
    }
    
        

export default ChartRow;