import { fields } from '@/constants'
import { FC } from 'react'
import Icon from './icon'
import { Button, Card, Input } from './ui'

export const Sidebar: FC = () => (
	<Card className='w-full h-full p-4 flex flex-col gap-4'>
		<Input placeholder='Search fields' />
		<div className='flex flex-col gap-4'>
			{fields.map(group => (
				<div key={group.label}>
					<div className='text-sm text-center text-zinc-500'>
						{group.label}
					</div>
					<div className='flex flex-col gap-2'>
						{group.elements.map(elem => (
							<Button
								key={elem.id}
								variant='outline'
								className='flex justify-start h-12 px-2 gap-2'
							>
								<Icon name={elem.icon} />

								{elem.name}
							</Button>
						))}
					</div>
				</div>
			))}
		</div>
	</Card>
)
