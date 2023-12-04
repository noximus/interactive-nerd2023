import Header from '../components/header';
import MenuModal from '../components/ui/MenuModal';
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
