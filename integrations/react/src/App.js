import React, { useEffect, useState } from 'react'
import firebase from './firebaseApp'
import Roadmap from './pages/Roadmap'
import Votes from './pages/Votes'

const App = () => {
  const [user, setUser] = useState(null)
  const [showRoadmap, setShowRoadmap] = useState(false)

  const setupAuthListener = () => {
    return firebase.auth().onAuthStateChanged(signedInUser => {
      if (signedInUser) {
        console.log(signedInUser)
        setUser(signedInUser)
      } else {
        console.log('Signed out')
        // User is signed out.
        // ...
      }
    })
  }

  const signInAnonymously = async () => {
    try {
      await firebase.auth().signInAnonymously()
    } catch (error) {
      console.log('Sign in error: ', error)
    }
  }

  useEffect(() => {
    const authUnsub = setupAuthListener()
    signInAnonymously()
    return () => {
      authUnsub()
    }
  }, [])

  if (!user) {
    return 'Loading...'
  }

  return (
    <>
      <button onClick={() => setShowRoadmap(!showRoadmap)}>Change view</button>
      {showRoadmap ? <Roadmap user={user}></Roadmap> : <Votes user={user}></Votes>}
    </>
  )
}

export default App
