import styles from './MenuBtn.module.scss';

const MenuBtn = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.nav_btn}>
        <span class={styles.ncs}></span>
        <span class={styles.nos}></span>
        <span class={styles.nbs}></span>
      </div>
      <div class={styles.menu_button_text}>Menu</div>
    </div>
  );
};

export default MenuBtn;
