import { InvalidArgumentError } from "restify";

interface IName {
    getValue () : string;   
}

export default class Name implements IName {
    private name: string;

    set value(value: string) {
        this.name = value
    }

    getValue(): string {
        if (this.name.length === 0) {
            throw new InvalidArgumentError("Name cannot be empty");
        }
        if (this.name.length < 2) {
            throw new InvalidArgumentError("Name have to be at least 2 characters long");
        }
        if (this.name.length > 255) {
            throw new InvalidArgumentError("Name cannot exceeds 255 characters long");
        }
        return this.name
    }
}