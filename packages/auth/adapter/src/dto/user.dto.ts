import { UserProps } from '@isaas/auth'

export default interface UserDTO extends UserProps {
    initials?: string
}
