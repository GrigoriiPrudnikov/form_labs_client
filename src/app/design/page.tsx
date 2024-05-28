import { Sidebar } from '@/components'
import { Card } from '@/components/ui'

export default function Page() {
	return (
		<main className='flex gap-4 p-4'>
			<div className='w-1/6 h-[calc(100vh-5.5rem)]'>
				<Sidebar />
			</div>
			<div className='w-1/2 h-[calc(100vh-5.5rem)]'>
				<Card className='w-full h-full'></Card>
			</div>
			<div className='w-1/3 h-[calc(100vh-5.5rem)]'>
				<Card className='w-full h-full'></Card>
			</div>
		</main>
	)
}
