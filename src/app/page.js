import Link from "next/link";

async function getCows() {
  const response = await fetch('https://mattel-back.onrender.com/api/cows?populate=img', { next: { revalidate: 300 } })
  const cows = await response.json()
  return cows.data
}

export default async function Home() {
  const cows = await getCows();
  return (
    <>
      {cows.map( (cow) => (
          <Link 
            key={cow.id}
            href={`/cow/${cow.id}`} 
            className="flex items-center rounded-lg shadow-xl p-6 border-white border-2 w-1/2 flex-auto gap-4"
          >
            { cow.attributes.img &&
              <img src={cow.attributes.img.data.attributes.url} height="100" width="100" alt="" />
            }
            <h1 className='text-6xl'>{cow.attributes.name}</h1>
          </Link>
        )
      )}
    </> 
  )
}
