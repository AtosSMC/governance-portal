import Title from '@/components/template/title.component'
import { IconDashboard } from '@tabler/icons-react'

export default function DashboardPage() {
    return (
        <div>
            <Title main="Dashboard" sub="Welcome to the dashboard" icon={IconDashboard} />
        </div>
    )
}
