import React from "react"


const List = ({list}) => (
    <ul>
        {list.length && list.map(item => <li key={item.id}> {item.label}</li>)}
    </ul>
)

export default List