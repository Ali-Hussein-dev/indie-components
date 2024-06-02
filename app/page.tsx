import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col justify-center text-center">
      <span className="mb-4 text-2xl font-bold">Indie UI</span>
      <h1 className="text-xl sm:text-3xl md:text-4xl mb-3 font-semibold">
        Cool UI components for free <br />
      </h1>
      <Link href="/docs" className="text-lg font-semibold w-fit mx-auto">
        Start Exploring
      </Link>
    </main>
  )
}
