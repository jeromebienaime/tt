import React from "react"


const List = ({list}) => (
    <ul>
{list.length && list.map(item => <li key={item.id}><p>{item.label} - done in {item.time} seconds ({item.started_at.toString()}, {item.stopped_at.toString()})</p></li>)}
    </ul>
)

export default List