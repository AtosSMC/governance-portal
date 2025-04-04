import { Email, Entity, EntityProps, PersonName, StrongPassword, Url } from '@isaas/shared'

export interface UserProps extends EntityProps {
    name?: string | null
    email?: string | null
    password?: string | null
    imageUrl?: string | null
}

export default class User extends Entity<User, UserProps> {
    readonly name: PersonName
    readonly email: Email
    readonly password: StrongPassword | null
    readonly imageUrl: Url | null

    constructor(props: UserProps) {
        super({ ...props, email: props.email?.toLowerCase() })
        this.name = new PersonName(props.name!)
        this.email = new Email(props.email!)
        this.password = props.password ? new StrongPassword(props.password!) : null
        this.imageUrl = props.imageUrl ? new Url(props.imageUrl!) : null
    }

    withPassword(password: string): User {
        return new User({ ...this.props, password })
    }

    withoutPassword(): User {
        const props = { ...this.props }
        delete props.password
        return new User(props)
    }
}
