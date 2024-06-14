import { HomeHeader } from '@/components'
import { Button, Input, Label } from '@/components/ui'

export default function Home() {
  return (
    <>
      <HomeHeader />
      <section className="px-12 sm:px-24 pt-52 h-[calc(100vh-3.5rem)] border-b border-zinc-200 dark:border-zinc-800">
        <div>
          <h1 className="scroll-m-20 sm:text-6xl font-extrabold tracking-tight text-5xl lg:text-7xl">
            Build beautiful
            <br />
            Forms in minutes!
          </h1>
          <p className="leading-7  [&:not(:first-child)]:mt-6  max-w-full sm:max-w-[50%]">
            Our intuitive form builder makes it easy to create custom forms for your business. No
            coding required.
          </p>
        </div>
      </section>
    </>
  )
}
