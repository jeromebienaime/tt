import React from "react"
import Current from "../containers/Current"
import { lorem } from "faker"

export default {
    title: "Current",
    component: Current
}

const data = {
    label: lorem.sentence()
}

export const Text = () => <Current item={data}/>
