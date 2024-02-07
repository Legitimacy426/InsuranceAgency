import Image from "next/image";
import Head from "next/head";
export default function Home() {
  return (
    <div>
    <Head>
      <title>Motor Vehicle Insurance Agency</title>
      <meta name="description" content="Welcome to Motor Vehicle Insurance Agency" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl sm:text-5xl font-bold text-center text-gray-900 mb-8">
          Welcome to Motor Vehicle Insurance Agency
        </h1>
        <p className="text-lg text-center text-gray-700 mb-12">
          Get the coverage you need for your vehicle. Protect yourself and your car on the road.
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-md transition duration-300">
            Get a Quote
          </button>
        </div>
      </div>
    </main>

    <footer className="bg-gray-800 text-white text-center py-4">
      <p>&copy; 2024 Motor Vehicle Insurance Agency. All rights reserved.</p>
    </footer>
  </div>
  );
}
