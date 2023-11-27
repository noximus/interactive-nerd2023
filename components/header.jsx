import Branding from './ui/Branding';
import MenuBtn from './ui/MenuBtn';
import ShareBtn from './ui/ShareBtn';

import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Branding />
      <MenuBtn />
      <ShareBtn />
    </header>
  );
};

export default Header;
