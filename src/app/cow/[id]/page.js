import Link from 'next/link'

async function getCow(id) {
  const response = await fetch(`https://mattel-back.onrender.com/api/cows/${id}?populate=img`, { next: { revalidate: 300 } })
  const cow = await response.json()
  return cow.data
}

const cowPage = async function ({ params }) {
  const cow = await getCow(params.id)
  const { attributes } = cow;
  const { name, img, description } = attributes;
  console.log(cow)
  return (
    <div className='w-2/3 flex flex-col items-start gap-4'>
    <Link href="/" className="border-white border-2 rounded-md p-4 my-4">🐄 Go Back to tail...</Link>
      <div className='flex w-full flex-col items-center justify-around'>
        <h2 className='text-4xl'>
          { name }
        </h2>
        { img &&
          <img src={img.data.attributes.url} height="300" width="300" alt="" />
        }
        <p className='text-xl'> { description } </p>
      </div>
    </div>
  )
}

export default cowPage