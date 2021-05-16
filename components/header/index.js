import Link from 'next/link'

const Menu = () => {
  return (
    <div class="header">
      <span class="link"><Link href="/">Sobre</Link></span>
      <span class="link"><Link class="link" href="/heroes">Heróis</Link></span>
    </div >
  )
}

export default Menu