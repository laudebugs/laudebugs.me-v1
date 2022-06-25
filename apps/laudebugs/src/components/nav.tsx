import Link from 'next/link'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">developer notes</Link>
        </li>
        <li>
          <Link href="/about">journal</Link>
        </li>
        <li>
          <Link href="/contact">listenings</Link>
        </li>
        <li>
          <Link href="/contact">old stuff</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
