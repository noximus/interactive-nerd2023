import styles from "./MenuModal.module.scss";

const MenuModal = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <a className={styles.menuLinks} href="#">
            HOME
          </a>
        </li>
        <li>
          <a className={styles.menuLinks} href="#">
            ABOUT
          </a>
        </li>
        <li>
          <a className={styles.menuLinks} href="#">
            PORTFOLIO
          </a>
        </li>
        <li>
          <a className={styles.menuLinks} href="#">
            CONTACTS
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuModal;
