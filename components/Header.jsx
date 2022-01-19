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
      <nav>
        <ul>
          <li>
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          </li>
          <li>
            <Link href="/photo">
              <a>Photo</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.sns}><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></div>
    </header>
  );
}

export default Header;