import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-gradient-to-tl from-gray-700 to-black">
      <main className='w-full py-8'>
        <div className="flex items-center justify-center flex-col gap-5 p-4">
          <h1 className='text-white text-center text-2xl md:text-6xl'>WE-LOVE-COWS.com !!!</h1>
          <div className="rounded-xl overflow-hidden mb-10">
            <iframe className='w-[350px] h-auto md:w-[50vw]' src="https://player.vimeo.com/video/795681841?h=f92d8b0312" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          </ div>
          {children}
        </div>
      </main>
      </body>
    </html>
  )
}
