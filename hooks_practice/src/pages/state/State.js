import React, { useState } from 'react';
import "./State.css"
const State = () => {
    const [count, setCount] = useState(0)

    function decrementCount() {
        setCount((prev) => prev - 1)
    }

    function incrementCount() {
        setCount((prev) => prev + 1)
    }

    return (
        <>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </>
    )

}


export default State