import { Metadata, ValidationError } from '../base'

export default class EncryptedPassword {
    static readonly REGEX = /^\$2[ayb]\$[0-9]{2}\$[A-Za-z0-9\.\/]{53}$/

    constructor(
        readonly value?: string,
        readonly meta?: Metadata,
    ) {
        if (!value || !EncryptedPassword.isValid(value)) {
            throw new ValidationError({
                code: 'encrypted-password.invalid',
                meta: { ...meta, value: undefined },
            })
        }
    }

    static isValid(hash: string): boolean {
        return EncryptedPassword.REGEX.test(hash)
    }
}
