import React, { useEffect, useState } from "react";
import './Effect.css';
import { v4 } from "uuid"

const Effect = () => {
    const [resourceType, setResourceType] = useState('posts')
    const [items, setItems] = useState([])

    async function fetchData() {
        const res = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        const data = await res.json();
        setItems(data)
    }

    useEffect(() => {
        fetchData();
    }, [resourceType])

    return (
        <>
            <div>
                <button onClick={() => setResourceType('posts')}>Post</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
            </div>
            <h1>{resourceType}</h1>
            {items.map((item) => {
                return <pre key={v4()}>{JSON.stringify(item)}</pre>
            })}
        </>
    )
}

export default Effect