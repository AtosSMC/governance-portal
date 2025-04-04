import { UserDTO } from '@isaas/auth-adapter'
import Input from '../shared/input.component'

export interface AuthFormProps {
    type: 'login' | 'signup'
    user: UserDTO
    onChange: (user: UserDTO) => void
    onSubmit: (user: UserDTO) => void
}

export default function AuthForm(props: AuthFormProps) {
    return (
        <div className="flex flex-col gap-5 w-full">
            {props.type === 'signup' && (
                <Input
                    label="Name"
                    type="text"
                    placeholder="Name"
                    value={props.user.name ?? ''}
                    onChangeValue={(name) =>
                        props.onChange({ ...props.user, name })
                    }
                />
            )}
            <Input
                label="E-mail"
                type="email"
                placeholder="E-mail"
                value={props.user.email ?? ''}
                onChangeValue={(email) =>
                    props.onChange({ ...props.user, email })
                }
            />
            <Input
                label="Password"
                type="password"
                placeholder="Password"
                value={props.user.password ?? ''}
                onChangeValue={(password) =>
                    props.onChange({ ...props.user, password })
                }
            />
        </div>
    )
}
