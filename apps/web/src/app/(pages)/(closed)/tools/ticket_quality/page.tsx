import { IconSearch } from '@tabler/icons-react'
import Title from '@/components/template/title.component'

export default function APage() {
    return (
        <>
            <div>
                <Title main="Page A" sub="Description of page A" icon={IconSearch} />
            </div>

            <div className="flex flex-col items-center  text-zinc-400">
                <h1 className="text-2xl sm:text-3xl font-semibold text-center">Análise Ticket Quality</h1>
                <main>DragNDrop Area</main>
            </div>
        </>
    )
}
