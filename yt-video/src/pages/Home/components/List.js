import React from "react"
import Item from "./Item"


const List = ({ listData }) => {
    return (
        <div className="list">
            {listData.map(item => <Item />)}
        </div>
    )
}

export default List