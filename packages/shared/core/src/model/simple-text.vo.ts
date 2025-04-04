import { Metadata, ValidationError } from '../base'

export default class SimpleText {
    constructor(
        readonly value: string,
        readonly min: number,
        readonly max: number,
        readonly meta?: Metadata,
    ) {
        this.value = value?.trim() ?? ''

        if (!value && min > 0) {
            throw new ValidationError({
                code: 'simple-text.empty',
                meta: { ...meta, value },
            })
        }

        if (value!.length < min) {
            throw new ValidationError({
                code: 'simple-text.too-short',
                meta: { ...meta, value: value },
            })
        }

        if (value!.length > max) {
            throw new ValidationError({
                code: 'simple-text.too-long',
                meta: { ...meta, value: value },
            })
        }
    }
}
