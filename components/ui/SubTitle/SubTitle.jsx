import Link from "next/link";
import Image from "next/image";

import styles from "./SubTitle.module.scss";

const SubTitle = () => {
  return (
    <Link href="/">
      <div className={styles.subTitle}>
        <div className={styles.site_name}>HomeSlider</div>
      </div>
    </Link>
  );
};

export default SubTitle;
