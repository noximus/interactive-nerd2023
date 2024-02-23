import styles from "./SideBar.module.scss";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarContainer}>
        <p>SideBar</p>
      </div>
    </div>
  );
};

export default SideBar;
