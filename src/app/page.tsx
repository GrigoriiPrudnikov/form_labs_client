import { Footer, HomeHeader } from '@/components'
import { Badge, Card } from '@/components/ui'

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
            Our intuitive form builder makes it easy to create custom forms for
            your business. No coding required.
          </p>
        </div>
      </section>
      <section className="py-28 px-12 h-screen border-b border-zinc-200 dark:border-zinc-800 flex flex-col items-center gap-8">
        <h1 className="scroll-m-20 sm:text-6xl font-extrabold tracking-tight text-5xl lg:text-7xl">
          See what you can build
        </h1>
        <p className="leading-5 text-zinc-500 text-center max-w-[80%]">
          Unlock the potential of your ideas with our intuitive form builder.
          Our platform allows you to create a wide range of forms to suit any
          need. Whether you&apos;re gathering customer feedback, conducting
          market research, or organizing an event, we&apos;ve got you covered.
        </p>
        <div className="flex justify-around w-fit gap-8">
          <Card className="p-4 w-72">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
              Customer Feedback
            </h3>
            <p className="text-zinc-500 text-sm dark:text-zinc-400 leading-6">
              Gather valuable insights with customized forms designed to capture
              customer opinions, suggestions, and satisfaction levels. Use this
              feedback to improve your products and services, enhancing overall
              customer experience and loyalty.
            </p>
          </Card>
          <Card className="p-4 w-72">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
              Event Registration
            </h3>
            <p className="text-zinc-500 text-sm dark:text-zinc-400 leading-6">
              Simplify your event planning process by designing forms that
              manage event registrations effortlessly. Collect comprehensive
              attendee information, preferences, and special requests to ensure
              a smooth and well-organized event.
            </p>
          </Card>
          <Card className="p-4 w-72">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
              Market Research Surveys
            </h3>
            <p className="text-zinc-500 text-sm dark:text-zinc-400 leading-6">
              Build comprehensive surveys that help you understand market
              trends, consumer behavior, and competitive landscapes. Utilize
              this valuable data to make informed, data-driven business
              decisions and stay ahead in the market.
            </p>
          </Card>
        </div>
      </section>
      <section className="py-28 px-12 h-screen border-b border-zinc-200 dark:border-zinc-800 flex flex-col items-center gap-8">
        <h1 className="scroll-m-20 text-center sm:text-6xl font-extrabold tracking-tight text-5xl lg:text-7xl">
          Feature Highlights
        </h1>
        <p className="leading-5 text-zinc-500 text-center max-w-[80%]">
          Discover the powerful features that make our form builder the best
          choice for creating and managing your forms. From customization to
          real-time analytics, we&apos;ve got everything you need to succeed.
        </p>
        <div className="flex justify-around w-fit gap-8">
          <div className="flex flex-col items-center gap-2">
            <Badge variant="outline">Coming soon</Badge>
            <Card className="p-4 w-72 h-full">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
                Customizable Templates
              </h3>
              <p className="text-zinc-500 text-sm dark:text-zinc-400 leading-6">
                Start with a solid foundation using our wide range of
                pre-designed templates that can be easily customized to meet
                your specific needs. Tailor each template to reflect your brand
                and purpose, ensuring a professional and polished look for every
                form you create.
              </p>
            </Card>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge variant="outline">Coming soon</Badge>
            <Card className="p-4 w-72 h-full">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
                Drag-and-Drop Interface
              </h3>
              <p className="text-zinc-500 text-sm dark:text-zinc-400 leading-6">
                Build forms with ease using our intuitive drag-and-drop
                interface. Create forms quickly without any coding knowledge by
                simply dragging the elements you need into place and arranging
                them as desired. Our user-friendly platform ensures a seamless
                form creation experience.
              </p>
            </Card>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge variant="outline">Coming soon</Badge>
            <Card className="p-4 w-72 h-full">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
                Responsive Design
              </h3>
              <p className="text-zinc-500 text-sm dark:text-zinc-400 leading-6">
                Ensure your forms look great on any device with our fully
                responsive design. Our forms are automatically optimized for
                desktops, tablets, and mobile screens, providing a seamless user
                experience and increasing engagement and response rates.
              </p>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-28 px-12 h-screen border-b border-zinc-200 dark:border-zinc-800 flex flex-col items-center gap-8">
        <h1 className="scroll-m-20 text-center sm:text-6xl font-extrabold tracking-tight text-5xl lg:text-7xl">
          Gain Insigths with Real-Time Analytics
        </h1>
        <p className="leading-5 text-zinc-500 text-center max-w-[80%]">
          Stay ahead with our powerful real-time analytics. Monitor responses as
          they come in, and gain actionable insights to make informed decisions
          instantly. Our analytics tools help you understand trends, identify
          patterns, and improve your strategies.
        </p>
        <div className="flex justify-around w-fit gap-8">
          <div className="flex flex-col items-center gap-2">
            <Badge variant="outline">Coming soon</Badge>
            <Card className="p-4 w-72 h-full">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
                Response Summary
              </h3>
              <p className="text-zinc-500 text-sm dark:text-zinc-400 leading-6">
                Get a quick overview of your form responses with our response
                summary feature. See key metrics like total responses, average
                scores, and most common answers all in one place.
              </p>
            </Card>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge variant="outline">Coming soon</Badge>
            <Card className="p-4 w-72 h-full">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
                Detailed Reports built with AI
              </h3>
              <p className="text-zinc-500 text-sm dark:text-zinc-400 leading-6">
                Generate detailed reports with a click. Our system provides
                in-depth analysis of your form data, including visual charts and
                graphs for easier interpretation.
              </p>
            </Card>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge variant="outline">Coming soon</Badge>
            <Card className="p-4 w-72 h-full">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
                Data Export
              </h3>
              <p className="text-zinc-500 text-sm dark:text-zinc-400 leading-6">
                Export your data to various formats such as CSV and Excel. This
                flexibility allows you to integrate your form data with other
                tools and systems seamlessly.
              </p>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
