import { v4 as uuid } from 'uuid'
import { Metadata } from '../base'

export default class Id {
    readonly value: string

    constructor(
        value?: string | null,
        readonly meta?: Metadata,
    ) {
        this.value = value ?? uuid()
    }

    static create() {
        return new Id()
    }

    static createUUID() {
        return new Id().value
    }

    equals(id: Id) {
        return this.value === id.value
    }

    notEquals(id: Id) {
        return this.value !== id.value
    }
}
