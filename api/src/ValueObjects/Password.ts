import { InvalidArgumentError } from "restify";
import hash from "password-hash"

interface IPassword {
    getValue (): string;
    check (value: string) : boolean;
}

export default class Password implements IPassword {
    private hashed: string;
    private password: string;

    set value (value: string) {
        this.password = value;
    }

    getValue() : string {
        if (this.password.length < 8) {
            throw new InvalidArgumentError("Password must be at least 8 characters long");
        }
        if (this.password.length > 255) {
            throw new InvalidArgumentError("Password must not exceeds 255 characters long");
        }
     
        this.hashed =  hash.generate(this.password)
        return this.hashed;
    }

    check(value: string) : boolean {
        return hash.verify(value, this.hashed)
    }
}