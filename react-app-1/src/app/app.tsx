// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import { jsLib1 } from '@vite-nx-demo/js-lib-1';
import { ReactLib1 } from '@vite-nx-demo/react-lib-1';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title="react-app-1" />
      <ReactLib1 />
      <p>{jsLib1()}</p>
    </div>
  );
}

export default App;
