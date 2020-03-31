import Paroot from 'paroot-react'
import React from 'react'
import { db, auth } from './firebaseApp'

const App = () => {
  return <Paroot auth={auth} db={db} bgColor="#121212" textColor="#FFFFFF" primaryColor="#ff5722"></Paroot>
}

export default App
