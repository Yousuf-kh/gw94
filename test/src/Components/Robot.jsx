import React from 'react'

const Robot = (props) => {
    return (
        <div>
            <h1 style={{ backgroundColor: props.color }}>Salom Mening Ismim : {props.name}  </h1>
        </div>
    )
}

export default Robot
