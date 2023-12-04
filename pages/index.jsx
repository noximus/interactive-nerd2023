import Header from '../components/Header/Header';
import MenuModal from '../components/ui/MenuModal/MenuModal';
import styles from './index.module.scss';

export default function Index() {
  return (
    <>
      <MenuModal />
      <Header />

      <div>This is where the content will go</div>
    </>
  );
}
