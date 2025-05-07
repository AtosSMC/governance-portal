import Title from '@/components/template/title.component'
import { IconDashboard } from '@tabler/icons-react'

export default function DashboardPage() {
    return (
        <>
            <div>
                <Title main="Dashboard" sub="Welcome to the dashboard" icon={IconDashboard} />
            </div>
            <iframe src="https://app.powerbi.com/view?r=eyJrIjoiOTc1MDViN2QtNmE1NS00MDViLWE5MTQtMmE0MTFiMThkMzY5IiwidCI6IjMzNDQwZmM2LWI3YzctNDEyYy1iYjczLTBlNzBiMDE5OGQ1YSIsImMiOjh9" frameBorder="0" className='flex flex-col items-center justify-center h-svh'></iframe>
        </>
    )
}
