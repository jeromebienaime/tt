/* eslint-disable react/prop-types */
import Interval from "luxon/src/interval.js"
import React from "react"

const List = ({ list }) => (
    <ul>
        {list.length && list.map(item => <li key={item.id}><p>{item.label} - done in {Interval.fromDateTimes(item.started_at, item.stopped_at).toDuration("seconds").toObject().seconds} seconds ({item.started_at.toString()}, {item.stopped_at.toString()})</p><p>total time in seconds: {item.time}</p></li>)}
    </ul>
)

export default List
