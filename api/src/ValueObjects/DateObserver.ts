import dayjs from "dayjs"
import { InvalidArgumentError } from "restify";

interface IDateObserver {
    getValue (): dayjs.Dayjs;
    toString(): string;
    toFormat(value: string): string;
}

export default class DateObserver implements IDateObserver {
    private dateObserver: dayjs.Dayjs;

    set value(value: string) {
        this.dateObserver = dayjs(value);
    }

    getValue() : dayjs.Dayjs {
        if (!this.dateObserver) {
            throw new InvalidArgumentError("DateObserver cannot be null")
        }

        if (this.dateObserver.year() < 2020) {
            throw new InvalidArgumentError("DateObserver cannot be set before year 2020")
        }

        return this.dateObserver;
    }
    toString() : string {
        return this.dateObserver.toString();
    }
    toFormat(value: string = "YYYY-MM-DD hh:mm:ss"): string {
        return this.dateObserver.format(value)
    }
}