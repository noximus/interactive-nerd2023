import Branding from './ui/Branding';
import MenuBtn from './ui/MenuBtn';
import ShareBtn from './ui/ShareBtn';

import styles from './header.module.scss';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <Branding />
      <MenuBtn />
      <ShareBtn />
      <Link href="/">Page 1</Link>
      <Link href="/test">Page 2</Link>
    </header>
  );
};

export default Header;
