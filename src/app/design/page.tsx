'use client'

import { DesignHeader, FormDesign, FormResponse } from '@/components'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui'

export default function Page() {
  return (
    <>
      <DesignHeader />
      <Tabs defaultValue="design">
        <div className="h-14 flex justify-center items-center">
          <TabsList>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="response">Response</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="design" className="mt-0">
          <FormDesign />
        </TabsContent>
        <TabsContent value="response" className="mt-0">
          <FormResponse />
        </TabsContent>
      </Tabs>
    </>
  )
}
