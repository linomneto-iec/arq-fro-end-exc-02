const apiUrl = 'developer.marvel.com'
const publicKey = '1200a69eba6e9bfbcaddb0b408053acc'

const listCharacters = async () => {
    const res = await fetch(apiUrl + '/v1/public/characters', {
        method: 'get',
        headers: new Headers({
            'Authorization': 'Basic ' + publicKey
        })
    });
    const data = await res.json()
    console.log(data)
    return data
}

export default { listCharacters }