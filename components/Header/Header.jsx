import Image from 'next/image';
import Link from 'next/link';

// Styles
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <>
          <Image
            src="/images/logo.svg"
            alt="Snapstock"
            height="40px"
            width="184px"
          />
        </>
      </Link>
    </header>
  );
}

export default Header;
