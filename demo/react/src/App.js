import React, { useEffect, useState } from 'react'
import firebase, { db } from './firebaseApp'
import Roadmap from './pages/Roadmap'
import Votes from './pages/Votes'
import Tabs from './components/Tabs'
import { Votes as Paroot } from 'paroot-react'
import parootConfig from './parootConfig'

const App = () => {
  const auth = firebase.auth()
  return <Paroot config={parootConfig} auth={auth} db={db}></Paroot>
}

export default App
