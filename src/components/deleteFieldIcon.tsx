import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from './ui'
import { Icon } from '.'
import { Button, AlertDialogHeader, AlertDialogFooter } from './ui'
import { IField } from '@/interfaces'

interface Props {
  field: IField
  deleteField: (field: IField) => void
}

export const DeleteFieldIcon = ({ field, deleteField }: Props) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline" size="icon" className="h-8 w-8">
        <Icon name="trash" color="red" className="h-4 w-4" />
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete this field
          and remove it from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={() => deleteField(field)}>
          Delete
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
)
