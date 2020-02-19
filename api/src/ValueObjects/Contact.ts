import Name from "./Name";
import _ from "lodash"

export enum EGender { "M", "F", "ND" }

export interface IContactProps {
    firstName: Name,
    lastName: Name,
    gender: EGender
};

export interface IContact {
    getValue () : IContactProps;
    toNominate () : string;
}

export default class Contact implements IContact {
    private props: IContactProps;

    set value(value: IContactProps) {
        this.props = value   
    }

    getValue() : IContactProps {
        return this.props;
    }

    toNominate() : string {
        return 
        `${this.props.gender.toString()} ${this.props.lastName.getValue()} ${this.props.firstName.getValue()}`
    }
}
