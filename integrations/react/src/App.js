import React, { useEffect, useState } from 'react'
import firebase from './firebaseApp'

const db = firebase.firestore()
let _votables = []
const App = () => {
  const [updated, setUpdated] = useState(new Date())
  const [suggestion, setSuggestion] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    db.collection('Feedback_Suggestions').add({
      title: suggestion
    })
    setSuggestion('')
  }

  const addVote = (id, votes) => {
    db.collection('Feedback_Votable')
      .doc(id)
      .update({
        votes: parseInt(votes, 10) + 1
      })
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
    const unsub = setupRealtimeListener()
    return () => {
      unsub()
    }
  }, [])

  const sorted = _votables.sort((a, b) => b.votes - a.votes)

  return (
    <>
      <ul>
        {sorted.map(votable => {
          return (
            <li key={votable.id}>
              {votable.title} - <button onClick={() => addVote(votable.id, votable.votes)}>{votable.votes}</button>
            </li>
          )
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={suggestion} onChange={({ target }) => setSuggestion(target.value)} />
        <button type="submit">Send suggestion</button>
      </form>
    </>
  )
}

export default App
