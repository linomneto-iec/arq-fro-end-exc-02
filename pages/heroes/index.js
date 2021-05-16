import listCharacters from '../../services'

export default function Home({ characters }) {
  return (
    <>
      <div class='container list-heroes'>
        <h1>Heróis</h1>
        {characters.map((char) => {
          return (
            <div class='content'>
              <div class='image'>
                <img
                  src={char.thumbnail.path + '.' + char.thumbnail.extension}
                  alt={char.name}
                  width={150}
                  height={150}
                />
              </div>
              <div class='title'>
                <span>{char.name}</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const res = await listCharacters()
  console.log(res.data.results)
  return { props: { characters: res.data.results } }
}