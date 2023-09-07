import styles from './react-lib-1.module.css';
import { ReactLib2 } from '@vite-nx-demo/react-lib-2';
/* eslint-disable-next-line */
export interface ReactLib1Props {}

export function ReactLib1(props: ReactLib1Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactLib1!</h1>
      <ReactLib2 />
    </div>
  );
}

export default ReactLib1;
