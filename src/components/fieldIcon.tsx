import { FieldType } from '@/interfaces'
import { Icon } from '.'

export const FieldIcon = ({ type }: { type: FieldType }) => {
  const icon = {
    [FieldType.SHORT_ANSWER]: 'type',
    [FieldType.PARAGRAPH]: 'align-left',
    [FieldType.EMAIL]: 'mail',
    [FieldType.NUMBER]: 'sigma',
    [FieldType.PHONE]: 'phone',
    // [FieldType.DATE]: 'calendar-days',
  }[type]

  return (
    <div className="h-8 w-8 flex justify-center items-center rounded-md border border-zinc-200 dark:border-zinc-800">
      {/* @ts-ignore */}
      <Icon name={icon} className="h-4 w-4" />
    </div>
  )
}
