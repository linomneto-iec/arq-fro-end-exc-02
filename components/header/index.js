import Link from 'next/link'

const Menu = () => {
  return (
    <div class="header">
      <span class="link"><Link href="/">Sobre</Link></span>
      <span class="link"><Link class="link" href="/heroes_ssr">Heróis(SSR)</Link></span>
      <span class="link"><Link class="link" href="/heroes_ssg">Heróis(SSG)</Link></span>
      <span class="link"><Link class="link" href="/heroes_not_ssr">Heróis(Render call api in Front)</Link></span>
    </div >
  )
}

export default Menu