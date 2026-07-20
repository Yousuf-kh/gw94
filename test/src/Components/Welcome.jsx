import React from 'react'

const Welcome = () => {
    let isLoggedIn = true
    const messages = 0
    return (
        <div>
            {isLoggedIn ? <h1>Salom Xush Kelibsiz</h1> : <h1>Brat Iltimos yoqolib qoling</h1>}

            {messages > 0 && (
                <p >Sizda {messages} ta yangi xabar bor! 📩</p>
            )}
        </div>
    )
}

export default Welcome
