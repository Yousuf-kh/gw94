import React from 'react'

const Welcome = () => {
    let isLoggedIn = true
    return (
        <div>
            {isLoggedIn ? <h1>Salom Xush Kelibsiz</h1> : <h1>Brat Iltimos yoqolib qoling</h1>}
        </div>
    )
}

export default Welcome
