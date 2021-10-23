import { Link } from 'next/link';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">developer notes</Link>
        </li>
        <li>
          <Link to="/about">journal</Link>
        </li>
        <li>
          <Link to="/contact">listenings</Link>
        </li>
        <li>
          <Link to="/contact">old stuff</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
