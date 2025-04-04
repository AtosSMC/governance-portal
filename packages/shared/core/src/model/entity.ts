import { Metadata } from '../base'
import Cloneable, { CloneableProps } from './cloneable'
import Id from './id.vo'

export interface EntityProps extends CloneableProps {
    id?: string | null
    createdAt?: Date | null
    updatedAt?: Date | null
    deletedAt?: Date | null
}

export default abstract class Entity<Type, Props extends EntityProps> extends Cloneable<Type, Props> {
    readonly id: Id

    constructor(props: Props, meta?: Metadata) {
        super(
            {
                ...props,
                createdAt: props.createdAt ?? new Date(),
                updatedAt: new Date(),
                id: new Id(props.id).value,
            },
            meta?.withId(props.id),
        )
        this.id = new Id(props.id)
    }

    equals(entidade: Entity<Type, Props>): boolean {
        return this.id.equals(entidade.id)
    }

    notEquals(entidade: Entity<Type, Props>): boolean {
        return this.id.notEquals(entidade.id)
    }

    get createdAt(): Date | null {
        return this.props.createdAt ?? null
    }

    get updatedAt(): Date {
        return this.props.updatedAt ?? new Date()
    }

    get deletedAt(): Date | null {
        return this.props.deletedAt ?? null
    }
}
