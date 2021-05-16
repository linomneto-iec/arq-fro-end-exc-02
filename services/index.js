

import MD5 from "crypto-js/md5";

const apiUrl = 'https://gateway.marvel.com'
const publicKey = '1200a69eba6e9bfbcaddb0b408053acc'
const privateKey = '8d7552719d1c958a12310ad08c635a1902784b0e'
const ts = 1
const hash = MD5(ts + privateKey + publicKey)

const listCharacters = async () => {
    const res = await fetch(`${apiUrl}/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}`, {
        method: 'get',
    });
    const data = await res.json()
    return data
}

export default listCharacters