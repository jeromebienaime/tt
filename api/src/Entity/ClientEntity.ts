import Name from "../ValueObjects/Name"
import Password from "../ValueObjects/Password"
import DateObserver from "../ValueObjects/DateObserver"

interface IClientProps {
    userName : Name;
    password : Password;
    companyName? : Name;
    createdAt : DateObserver;
    updatedAt : DateObserver;
    archivedAt: DateObserver;
    deletedAt: DateObserver;
    contact? : Contact;
    URL? : Url;
    active : boolean;
}

class ClientEntity {
    private props: IClientProps;

    constructor(props : IClientProps, id? : IUniqueEntityId) {
        this.props = props;
    }

    get UserName (): string {
        return this.props.userName.getValue();
    }
}