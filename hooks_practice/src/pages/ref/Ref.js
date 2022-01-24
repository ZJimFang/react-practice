import React, { useState, useEffect, useRef } from 'react';
import "./Ref.css"

const Ref = () => {
    const [name, setName] = useState('')
    const prevName = useRef('')

    useEffect(() => {
        prevName.current = name
    }, [name])

    return (
        <>
            <input value={name} onChange={e => setName(e.target.value)}></input>
            <div>
                <span>My name is {name} and used to be {prevName.current}</span>
            </div>
        </>
    )
}

export default Ref