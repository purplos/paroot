import React, { useEffect, useState } from 'react'
import firebase from '../firebaseApp'
import VotableList from '../components/VotableList'
import VotableItem from '../components/VotableItem'
import SuggestionForm from '../components/SuggestionForm'

// NOTE: Check if you can vote multiple times if you have more windows open
// BEWARE: Users can vote multiple times if they open the app in incognito

const db = firebase.firestore()
let _votables = []
const Votes = ({ user }) => {
  const [updated, setUpdated] = useState(new Date())

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
    _votables = []
    const realtimeUnsub = setupRealtimeListener()
    return () => {
      realtimeUnsub()
    }
  }, [])

  const sorted = _votables.sort((a, b) => b.votes.length - a.votes.length)

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
          maxWidth: '100%',
          background: 'white',
          boxShadow: '0px 0px 24px rgba(0,0,0,0.1)'
        }}
      >
        <VotableList>
          {sorted.map(votable => {
            return <VotableItem key={votable.id} user={user} item={votable} />
          })}
        </VotableList>
      </div>
      <SuggestionForm />
    </main>
  )
}

export default Votes
