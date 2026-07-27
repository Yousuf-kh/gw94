import React from 'react'
import { useEffect, useState } from 'react'
useEffect(() => {
    const prevSon = prevSonRef.current;

    if (son !== prevSon) {
        if (son > prevSon) {
            alert("Qo'shildi");
        } else {
            alert("Kamaydi");
        }
        prevSonRef.current = son;
    }
}, [son]); // Runs only when 'son' changes

return (
    <div>
        <button onClick={() => { setSon(son + 1) }}>+1</button>
        <h1>Son: {son}</h1>
        <button onClick={() => { setSon(son - 1) }}>-1</button>
    </div>
)
export default Useeffect