import Branding from '../ui/Branding/Branding';
import MenuBtn from '../ui/MenuBtn/MenuBtn';
import ShareBtn from '../ui/ShareBtn/ShareBtn';

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
