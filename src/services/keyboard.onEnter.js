const onEnter = (callback) => (event) => {
    if (event.key === "Enter") {
        callback(event.target.value)
        event.target.value = ""
    }
}
export default onEnter
