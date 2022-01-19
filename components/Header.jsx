import Link from "next/link";
import styles from '../styles/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.id}>
        <Link href="/">
          <a><img src="https://dummyimage.com/600x600/444/fff.png&amp;text=Site+Logo" /></a>
        </Link>
      </div>
    </header>
  );
}

export default Header;