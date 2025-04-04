import { Metadata, ValidationError } from '../base'

export default class Url {
    private url: URL

    constructor(
        readonly value?: string,
        meta?: Metadata,
    ) {
        this.value = value ?? ''

        if (!Url.isValid(this.value)) {
            throw new ValidationError({
                code: 'url.invalid',
                meta: { ...meta, value: this.value },
            })
        }

        this.url = new URL(this.value)
    }

    get protocol(): string {
        return this.url.protocol
    }

    get domain(): string {
        return this.url.hostname
    }

    get pathname(): string {
        return this.url.pathname
    }

    get parameters(): any {
        const params = this.url.searchParams.toString().split('&')
        return params.reduce((paramsObj, param) => {
            const [key, value] = param.split('=')
            return { ...paramsObj, [key!]: value }
        }, {} as any)
    }

    static isValid(url: string): boolean {
        try {
            new URL(url)
            return true
        } catch {
            return false
        }
    }
}
