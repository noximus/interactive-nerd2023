import { forwardRef } from 'react';
import styles from './ShareCluster.module.scss';

const ShareCluster = forwardRef((props, ref) => {
  
  return <div ref={ref} className={styles.sharecluster}></div>
})

export default ShareCluster;
