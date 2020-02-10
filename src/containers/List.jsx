import React from "react"


const List = ({list}) => (
    <ul>
        {list.length && list.map(item => <li key={item.id}><p>{item.label}</p></li>)}
    </ul>
)

export default List