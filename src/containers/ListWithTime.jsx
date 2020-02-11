/* eslint-disable react/prop-types */
import React from "react"

const List = ({ list }) => (
    <ul>
        {list.length && list.map(item => <li key={item.id}><p>{item.label} - done in {/* @TODO duration: stopped_at - started_at, might need momentjs or https://moment.github.io/luxon/*/} seconds ({item.started_at.toString()}, {item.stopped_at.toString()})</p><p>total time in seconds: {item.time}</p></li>)}
    </ul>
)

export default List
