import { Metadata, ValidationError } from '../base'
import SimpleText from './simple-text.vo'

export default class PersonName extends SimpleText {
    constructor(value?: string, meta?: Metadata) {
        super(value ?? '', 4, 120, meta)

        if (!/^[a-zA-ZÀ-ú'\.-\s]*$/.test(value!)) {
            throw new ValidationError({
                code: 'person-name.invalid',
                meta: { ...meta, value: value },
            })
        }

        if (value!.split(' ').length < 2) {
            throw new ValidationError({
                code: 'person-name.surname-missing',
                meta: { ...meta, value: value },
            })
        }
    }

    get firstName() {
        return this.value!.split(' ')[0]!
    }

    get lastNames(): string[] {
        return this.value!.split(' ').slice(1)
    }

    get lastName(): string {
        return this.value!.split(' ').pop() as string
    }

    get initials(): string {
        return (this.firstName[0]! + this.lastName[0]!)?.toUpperCase()
    }
}
