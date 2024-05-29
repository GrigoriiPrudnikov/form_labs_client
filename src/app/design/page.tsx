'use client'

import { Sidebar } from '@/components'
import { DesignField } from '@/components/designField'
import { Card, ScrollArea } from '@/components/ui'
import { useFormStore } from '@/state'

export default function Page() {
	const fields = useFormStore(state => state.fields)

	return (
		<main className='flex gap-4 p-4'>
			{/* Sidebar */}
			<div className='w-1/6 h-[calc(100vh-5.5rem)]'>
				<Sidebar />
			</div>
			{/* Design */}
			<div className='w-1/2 h-[calc(100vh-5.5rem)]'>
				<Card className='w-full h-full'>
					<ScrollArea className='h-full w-full p-4'>
						{fields.map(elem => (
							<DesignField key={elem.id} field={elem} />
						))}
					</ScrollArea>
				</Card>
			</div>
			{/* Preview */}
			<div className='w-1/3 h-[calc(100vh-5.5rem)]'>
				<Card className='w-full h-full'></Card>
			</div>
		</main>
	)
}
