/* eslint-disable react/prop-types */
import React from "react"

const List = (props) => (
    <ul>
        {props.list.length && props.list.map(item =>
            <li key={item.id}>
                {item.companyName} - {item.id}
                {item.URL && <div>{item.URL}</div>}
                {item.createdAt.toString()}
                <hr />
                {item.contact.gender === "F" && <span>Mme</span>}
                {item.contact.gender === "M" && <span>Mr</span>}
                {item.contact.lastName} {item.contact.firstName}
                <hr/>
                {item.userName} - <i>{item.password}</i>

            </li>
        )}
    </ul>
)

export default List
