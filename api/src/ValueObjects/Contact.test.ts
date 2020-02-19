import test from "tape"
import Contact, { EGender, IContactProps } from "./Contact"
import faker from "faker"
import Name from "./Name";
import _ from "lodash"

test("Contact should have a prop bag", t => {
    const o = new Contact();
    const firstName:Name = new Name();
    firstName.value = faker.name.firstName();
    const lastName:Name = new Name();
    lastName.value = faker.name.lastName();

    const data: IContactProps = {
        firstName,
        lastName,
        gender: _.first(_.shuffle([EGender.M, EGender.F, EGender.ND]))
    };

    o.value = data;
    
    t.deepEqual(data, o.getValue(), "props can be assigned via a setter")
    t.end()
})