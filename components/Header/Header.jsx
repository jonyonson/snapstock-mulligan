import Image from 'next/image';
import Link from 'next/link';
import Search from '../Search/Search';

// Styles
import styles from './Header.module.scss';

function Header({ className }) {
  return (
    <header className={`${styles.header} ${className}`}>
      <Link href="/">
        <a>
          <h1>
            <Image
              src="/images/logo.svg"
              alt="Snapstock"
              height="40px"
              width="184px"
            />
          </h1>
        </a>
      </Link>
      <Search placeholder="🔍  Search Quotes" className="py-4" />
    </header>
  );
}

export default Header;
