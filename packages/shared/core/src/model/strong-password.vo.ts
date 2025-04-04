import { Metadata, ValidationError } from '../base'

export default class StrongPassword {
    static readonly REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

    constructor(
        readonly value?: string,
        readonly meta?: Metadata,
    ) {
        if (!StrongPassword.isValid(value ?? '')) {
            throw new ValidationError({
                code: 'strong-password.too-weak',
                meta: { ...meta, value: undefined },
            })
        }
    }

    static isValid(password: string): boolean {
        return this.REGEX.test(password)
    }
}
