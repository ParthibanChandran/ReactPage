import React from 'react'
import { Arrow,Buttons } from './style';    

export default function ButtonComponent(props) {
    return (
        <React.Fragment>
            <Buttons width={props.width}>{props.val}<Arrow>&#10142;</Arrow></Buttons>
        </React.Fragment>
    )
}
