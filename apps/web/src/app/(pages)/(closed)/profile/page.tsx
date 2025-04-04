import { IconUser } from '@tabler/icons-react'
import Title from '@/components/template/title.component'

export default function ProfilePage() {
    return (
        <div>
            <Title main="My Profile" sub="Manage your account information" icon={IconUser} />
        </div>
    )
}
