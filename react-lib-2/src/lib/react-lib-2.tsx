import styles from './react-lib-2.module.css';

/* eslint-disable-next-line */
export interface ReactLib2Props {}

export function ReactLib2(props: ReactLib2Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactLib2!</h1>
    </div>
  );
}

export default ReactLib2;
