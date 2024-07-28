import React from "react";
export default function FunComp(props) {
    return (
        <div className='alert alert-success'>
            <h1>FunComp demo</h1>
            <p>Well come to {props.rendeFullName}</p>
        </div>
    )
}
