import Paroot from 'paroot-react'
import React from 'react'
import { db, auth } from './firebaseApp'
import parootConfig from './parootConfig'

const App = () => {
  return (
    <Paroot
      config={parootConfig}
      auth={auth}
      db={db}
      bgColor="#121212"
      textColor="#FFFFFF"
      primaryColor="#ff5722"
    ></Paroot>
  )
}

export default App
