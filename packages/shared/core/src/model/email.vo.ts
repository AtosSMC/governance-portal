import { Metadata, ValidationError } from '../base'

export default class Email {
    constructor(
        readonly value: string,
        readonly meta?: Metadata,
    ) {
        this.value = value?.trim().toLocaleLowerCase() ?? ''

        if (!Email.isValid(value)) {
            throw new ValidationError({
                code: 'email.invalid',
                meta: { ...meta, value },
            })
        }
    }

    get username(): string {
        return this.value!.split('@')[0]!
    }

    get domain(): string {
        return this.value!.split('@')[1]!
    }

    static isValid(email: string): boolean {
        const regex =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
        return regex.test(email)
    }
}
