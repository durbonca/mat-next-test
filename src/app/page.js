import styles from './page.module.css'

async function getCows() {
  const response = await fetch('https://mattel-back.onrender.com/api/cows?populate=img', { next: { revalidate: 300 } })
  const cows = await response.json()
  return cows.data
}

export default async function Home() {
  const cows = await getCows();
  return (
    <main className='w-full py-8'>
      <div className="flex items-center justify-center flex-col gap-5 p-4">
      <h1 className='text-center text-6xl'>WE-LOVE-COWS.com !!!</h1>
      <div className="rounded-xl overflow-hidden mb-10">
        <iframe src="https://player.vimeo.com/video/795681841?h=f92d8b0312" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </ div>
        {cows.map( (cow) => (
          <div 
            className="flex items-center rounded-lg shadow-xl p-6 border-white border-2 w-1/2 flex-auto gap-4 cursor-pointer"
            key={cow.id} >
            { cow.attributes.img &&
              <img src={cow.attributes.img.data.attributes.url} height="100" width="100" alt="" />
            }
            <h1 className='text-6xl'>{cow.attributes.name}</h1>
          </div>
          )
        )}
      </div>
    </main>
  )
}
