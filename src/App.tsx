import React, {useState} from 'react';
import {routes, RoutesEnum} from './routes'
import styles from './App.module.scss'
import classnames from 'classnames'

function App() {
  const [route, setRoute] = useState<RoutesEnum>(RoutesEnum.Basic)
  const Component = routes[route]

  return (
    <>
      <div className={styles.buttons}>
        {Object.values(RoutesEnum).map((routeName)=> 
          <button key={routeName} onClick={() => setRoute(routeName)}>{routeName.toUpperCase()}</button>)
        }
      </div>
      <div className={classnames(styles.container, {[styles.basic]: route === RoutesEnum.Basic})}>
        <Component />
      </div>
    </>
  );
}

export default App;
