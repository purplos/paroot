import React, { useState, useEffect } from 'react'
import firebase from './firebaseApp'

const db = firebase.firestore()

const App = () => {
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [suggestions, setSuggestions] = useState([])

  const setupAuthListener = () => {
    return firebase.auth().onAuthStateChanged(signedInUser => {
      if (signedInUser) {
        console.log(signedInUser)
        setUser(signedInUser)
        fetchSuggestions()
      } else {
        console.log('Signed out')
        // User is signed out.
        // ...
      }
    })
  }

  const fetchSuggestions = async () => {
    try {
      const querySnapshot = await db.collection('Feedback_Suggestions').get()
      console.log(querySnapshot.docs)
      setSuggestions(querySnapshot.docs.map(suggestion => ({ ...suggestion.data(), id: suggestion.id })))
    } catch (error) {
      console.log('Fetch error: ', error)
    }
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      console.log(email, password)
      await signIn(email, password)
      setEmail('')
      setPassword('')
    } catch (error) {
      console.log('SignIn Error: ', error)
    }
  }

  const signIn = async (email, password) => {
    console.log(email, password)
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }

  useEffect(() => {
    const unsub = setupAuthListener()
    return () => {
      unsub()
    }
  }, [])

  const approveSuggestion = async suggestion => {
    try {
      await db
        .collection('Feedback_Votable')
        .doc(suggestion.id)
        .set({
          title: suggestion.title,
          votes: []
        })
      await db
        .collection('Feedback_Suggestions')
        .doc(suggestion.id)
        .delete()
      setSuggestions(suggestions.filter(sug => sug.id !== suggestion.id))
    } catch (error) {
      console.log('Approve error: ', error)
    }
  }

  if (user) {
    return (
      <main>
        <button onClick={fetchSuggestions}>Refresh</button>
        <ul>
          {suggestions.map(suggestion => (
            <li key={suggestion.id}>
              {suggestion.title}
              <button onClick={() => approveSuggestion(suggestion)}>Approve</button>
            </li>
          ))}
        </ul>
      </main>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">E-mail</label>
      <input type="email" name="email" id="email" value={email} onChange={({ target }) => setEmail(target.value)} />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button type="submit">Sign in</button>
    </form>
  )
}

export default App
