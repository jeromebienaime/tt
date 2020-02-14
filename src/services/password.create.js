import password from "password-generator"

export default () => {
    return password(10, false, null, "bc-")
}
