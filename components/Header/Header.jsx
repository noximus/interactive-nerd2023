import Branding from "../ui/Branding/Branding";
import MenuBtn from "../ui/MenuBtn/MenuBtn";
import ShareBtn from "../ui/ShareBtn/ShareBtn";
import SubTitle from "../ui/SubTitle/SubTitle";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Branding />
      <MenuBtn />
      <ShareBtn />
      <SubTitle />
    </header>
  );
};

export default Header;
