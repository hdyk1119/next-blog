import Link from "next/link";
import styles from '../styles/Header.module.scss';

const Header = () => {
  return (
    <header>
      <h1 className={styles.heading}>
        <Link href="/">Header</Link>
      </h1>
    </header>
  );
}

export default Header;