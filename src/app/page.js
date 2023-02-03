import Link from "next/link";
import Img from "next/image";

async function getCows() {
  const response = await fetch('https://mattel-back.onrender.com/api/cows?populate=img', { next: { revalidate: 60 } })
  const cows = await response.json()
  return cows.data ? cows.data : []
}

export default async function Home() {
  const cows = await getCows();
  return (
    <>
      {cows.map( ({ id, attributes }) => (
          <Link 
            key={id}
            href={`/cow/${id}`} 
            className="flex items-center rounded-lg shadow-xl p-1 md:p-6 border-white border-2 w-full md:w-1/2 flex-auto gap-4"
          >
            { attributes.img &&
              <Img src={attributes.img.data.attributes.url} height="100" width="100" alt="" />
            }
            <h1 className='text-4xl md:text-6xl'>{attributes.name}</h1>
          </Link>
        )
      )}
    </> 
  )
}
