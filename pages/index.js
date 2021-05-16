import Image from 'next/image'
import listCharacters from '../services'

export default function Home({ characters }) {
  return (
    <>
      {console.log(characters.length)}
      {characters.map((char) => {
        return (
          <div class=''>
            <div class=''>
              <span>Nome: {char.name}</span>
            </div>
            <div class=''>
              <img
                src={char.thumbnail.path + '.' + char.thumbnail.extension}
                alt={char.name}
                width={200}
                height={200}
              />
            </div>
          </div>
        )
      })}
    </>
  )
}

export async function getServerSideProps() {
  const res = await listCharacters()
  console.log(res.data.results)
  return { props: { characters: res.data.results } }
}