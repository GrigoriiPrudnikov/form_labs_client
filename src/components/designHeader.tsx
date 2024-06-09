'use client'

import { useFormStore } from '@/state'
import { getAvatarFallback } from '@/utils/getAvatarFallback'
import { zodResolver } from '@hookform/resolvers/zod'
import { JetBrains_Mono } from 'next/font/google'
import Link from 'next/link'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { isEmpty } from 'validator'
import { z } from 'zod'
import { Icon } from '.'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  useToast,
} from './ui'
import { cn } from '@/lib/utils'

const jetbrains_mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400'] })

const formSchema = z.object({
  name: z.string().refine((val) => !isEmpty(val.trim()), {
    message: 'Name cannot be empty',
  }),
})

export const DesignHeader: FC = () => {
  const state = useFormStore((state) => state)
  const { toast } = useToast()
  const fallback = getAvatarFallback('Steve Jobs')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: state.name,
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    state.updateName(values.name)
    toast({
      title: 'Form name updated!',
      description: 'You can change it anytime',
    })
  }

  const onCopy = () => {
    navigator.clipboard.writeText(`https://form-labs/form/${state.id}`)
    toast({
      title: 'Link copied!',
      description: 'Now you can share it to others!'
    })
  }

  return (
    <header className="px-4 w-full h-14 flex justify-between items-center border-b border-zinc-200 dark:border-zinc-800">
      <div className="flex gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/" className="flex justify-center items-center">
            <Icon name="chevron-left" />
          </Link>
        </Button>
        <div className="flex items-center gap-2">
          <div className={cn(jetbrains_mono.className, 'text-2xl')}>{state.name}</div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </DialogTrigger>

            <DialogContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <DialogHeader>
                    <DialogTitle>Edit form name</DialogTitle>
                    <DialogDescription>
                      Make changes to your form name here. Click save when you are done.
                    </DialogDescription>
                  </DialogHeader>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Untitled form" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <DialogFooter className="flex justify-end mt-4">
                    <Button type="submit">Confirm</Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Share</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Share link</DialogTitle>
              <DialogDescription>
                Anyone who has this link will be able to view this form.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center gap-4">
              <Input defaultValue={`https://form-labs/form/${state.id}`} readOnly />
              <Button size="icon" onClick={onCopy} className='px-3'>
                <Icon name="copy" className="h-4 w-4" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
