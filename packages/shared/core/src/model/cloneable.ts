import { Metadata } from '../base'

type CloneableType =
    | string
    | number
    | boolean
    | Date
    | null
    | undefined
    | string[]
    | number[]
    | boolean[]
    | Date[]
    | CloneableProps
    | CloneableProps[]

export interface CloneableProps {
    [key: string]: CloneableType
}

export default abstract class Cloneable<Tipo, Props extends CloneableProps> {
    constructor(
        readonly props: Props,
        readonly meta?: Metadata,
    ) {}

    clone(newProps: Partial<Props>, ...args: any[]): Tipo {
        return new (this.constructor as any)(
            {
                ...this.props,
                ...newProps,
            },
            ...args,
        )
    }
}
