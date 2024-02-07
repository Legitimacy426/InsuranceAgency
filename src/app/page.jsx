import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <>
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
        {/* <Image
          alt="Hero"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          height="310"
          src="https://unsplash.com/photos/gray-mercedes-benz-coupe-on-black-asphalt-road-during-daytime-_4sWbzH5fp8"
          width="550"
        /> */}
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Peace of mind on the open road
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Protect your vehicle with the best insurance coverage. We make sure you're covered when the unexpected
              happens.
            </p>
          </div>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  </section>
  <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container grid items-center gap-6 px-4 md:px-6">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Why choose our insurance agency?
        </h2>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          We're dedicated to providing the best service and coverage options for our customers.
        </p>
      </div>
      <div className="mx-auto max-w-4xl grid gap-6 lg:grid-cols-3 lg:gap-0">
        <div className="flex flex-col items-center gap-2 py-4 text-center rounded-lg bg-gray-100/40 backdrop-blur-10 dark:bg-gray-800/40">
          <p className="w-12 h-12 rounded-lg bg-gray-100 p-3 backdrop-blur-10 dark:bg-gray-800/40" />
          <div className="space-y-2">
            <h3 className="font-bold">Custom Coverage</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              We'll help you find the perfect coverage for your needs.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 py-4 text-center rounded-lg bg-gray-100/40 backdrop-blur-10 dark:bg-gray-800/40">
          <p className="w-12 h-12 rounded-lg bg-gray-100 p-3 backdrop-blur-10 dark:bg-gray-800/40" />
          <div className="space-y-2">
            <h3 className="font-bold">Peace of Mind</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Rest easy knowing you're protected on the road.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 py-4 text-center rounded-lg bg-gray-100/40 backdrop-blur-10 dark:bg-gray-800/40">
          <p className="w-12 h-12 rounded-lg bg-gray-100 p-3 backdrop-blur-10 dark:bg-gray-800/40" />
          <div className="space-y-2">
            <h3 className="font-bold">Exceptional Service</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Our team is here to provide support when you need it.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Performance</div>
          <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
            The Open Road Awaits
          </h2>
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Get Started
          </Link>
        </div>
        <div className="flex flex-col items-start space-y-4">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Security</div>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            Fully managed infrastructure designed to scale dynamically with your traffic, a global edge to ensure
            your site is fast for every customer, and the tools to monitor every aspect of your app.
          </p>
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  </section>
  </>
  );
}
