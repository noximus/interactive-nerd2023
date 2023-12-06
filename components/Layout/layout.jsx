import Header from '../Header/Header';
import styles from './layout.scss';

const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div>Share</div>
    </div>
  );
};

export default Layout;
