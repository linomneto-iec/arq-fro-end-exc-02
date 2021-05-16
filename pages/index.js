import Head from 'next/head'
import { listCharacters } from '../services'

const Home = ({ data }) => {
  return (
    <>
      <Head>
        <title>Marvel</title>
      </Head>
      <div>
        <h1>Hello World</h1>
      </div>
    </>
  )
}


export async function getServerSideProps() {
  const apiUrl = 'https://gateway.marvel.com'
  const publicKey = '1200a69eba6e9bfbcaddb0b408053acc'
  const res = await fetch('https://gateway.marvel.com/v1/public/characters&apikey=' + publicKey, {
    method: 'get',
  });
  const data = await res.json()
  console.log(data)

  return { props: { data } }
}

export default Home