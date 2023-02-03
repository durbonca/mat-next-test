import styles from './page.module.css'

async function getCows() {
  const response = await fetch('https://mattel-back.onrender.com/api/cows', { next: { revalidate: 300 } })
  const cows = await response.json()
  return cows.data
}

export default async function Home() {
  const cows = await getCows();

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        {cows.map( (cow) => (
          <div key={cow.id} className={styles.cow}>
            <h1>{cow.attributes.name}</h1>
            <p>{cow.attributes.url}</p>
          </div>
          )
        )}
      </div>
    </main>
  )
}
