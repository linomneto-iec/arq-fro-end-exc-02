import Link from 'next/link'

const Menu = () => {
    return (
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/list-heroes">
                    <a>Lista de heróis</a>
                </Link>
            </li>
        </ul>
    )
}

export default Menu