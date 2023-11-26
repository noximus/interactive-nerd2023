import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <div>Logo</div>
        <div>Interactiver Nerd</div>
      </div>
      <div className={styles.menu}>Menu</div>
      <div className={styles.share}>Share</div>
    </header>
  );
};

export default Header;
