import Link from 'next/link';
import Image from 'next/image';

import styles from './Branding.module.scss';

const Branding = () => {
  return (
    <Link href="/">
      <div className={styles.brand}>
        <Image className={styles.logo} src="/assets/logo/logo-200.png" alt="Interactive Nerd Logo" width={200} height={117} />
        <div className={styles.site_name}>Interactive Nerd</div>
      </div>
    </Link>
  );
};

export default Branding;
