import Link from 'next/link';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">Blog</Link>
      <div className={styles.mobileMenu}>
        <span className="ncs"></span>
        <span className="nos"></span>
        <span className="nbs"></span>
        <div className="menu-button-text">Menu</div>
      </div>
    </header>
  );
};

export default Header;
