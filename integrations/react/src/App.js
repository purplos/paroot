import React, { useEffect, useState } from 'react'
import firebase from './firebaseApp'
import VotableList from './components/VotableList'
import VotableItem from './components/VotableItem'

const db = firebase.firestore()
let _votables = []
const App = () => {
  const [user, setUser] = useState(null)
  const [updated, setUpdated] = useState(new Date())
  const [suggestion, setSuggestion] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    db.collection('Feedback_Suggestions').add({
      title: suggestion
    })
    setSuggestion('')
  }

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

  const toggleVote = (id, votes) => {
    if (votes.includes(user.uid)) {
      db.collection('Feedback_Votable')
        .doc(id)
        .update({
          votes: votes.filter(vote => vote !== user.uid)
        })
    } else {
      db.collection('Feedback_Votable')
        .doc(id)
        .update({
          votes: [...votes, user.uid]
        })
    }
  }

  const setupRealtimeListener = () => {
    return db.collection('Feedback_Votable').onSnapshot(snapshot => {
      console.log(_votables)
      snapshot.docChanges().forEach(change => {
        const doc = change.doc
        if (change.type === 'added') {
          const data = { ...doc.data(), id: doc.id }
          _votables = [..._votables, data]
        }
        if (change.type === 'modified') {
          const id = doc.id
          _votables = _votables.map(votable => {
            if (votable.id !== id) return votable
            return { ...doc.data(), id: doc.id }
          })
        }
        if (change.type === 'removed') {
          const id = doc.id
          _votables = _votables.filter(votable => votable.id !== id)
        }
      })
      setUpdated(new Date())
    })
  }

  useEffect(() => {
    const realtimeUnsub = setupRealtimeListener()
    const authUnsub = setupAuthListener()
    signInAnonymously()
    return () => {
      realtimeUnsub()
      authUnsub()
    }
  }, [])

  const sorted = _votables.sort((a, b) => b.votes - a.votes)

  if (!user) {
    return 'Loading...'
  }

  return (
    <main
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <div
        style={{
          width: 600,
          background: 'white',
          boxShadow: '0px 0px 24px rgba(0,0,0,0.1)'
        }}
      >
        <VotableList>
          {sorted.map(votable => {
            return <VotableItem item={votable} />
          })}
        </VotableList>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={suggestion} onChange={({ target }) => setSuggestion(target.value)} />
        <button type="submit">Send suggestion</button>
      </form>
    </main>
  )
}

export default App
