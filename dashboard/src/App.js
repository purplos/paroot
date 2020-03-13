import React, { useState, useEffect } from 'react'
import firebase from './firebaseApp'
import Roadmap from './Roadmap'
import { Box, Button, Flex, Text, Heading, Grid } from '@chakra-ui/core'
import Suggestions from './Suggestions'
import Votes from './Votes'

const db = firebase.firestore()

const App = () => {
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [suggestions, setSuggestions] = useState([])
  const [votes, setVotes] = useState([])

  const [roadmap, setRoadmap] = useState([])
  const fetchRoadmap = async () => {
    try {
      const roadmapDoc = await db.collection('Feedback_Roadmap').get()
      setRoadmap(roadmapDoc.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    } catch (error) {
      console.log('Fetch roadmap error: ', error)
    }
  }

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

  const fetchVotes = async () => {
    try {
      const querySnapshot = await db.collection('Feedback_Votable').get()
      console.log(querySnapshot.docs)
      setVotes(querySnapshot.docs.map(votable => ({ ...votable.data(), id: votable.id })))
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

  const refresh = () => {
    fetchSuggestions()
    fetchRoadmap()
    fetchVotes()
  }

  useEffect(() => {
    refresh()
  }, [])

  if (user) {
    return (
      <>
        <Button variantColor="blue" onClick={refresh}>
          Refresh
        </Button>
        <Grid templateColumns="1fr 1fr 1fr" gap={4} p={4}>
          <Suggestions suggestions={suggestions} setSuggestions={setSuggestions} />
          <Votes votes={votes} setVotes={setVotes} milestones={roadmap} />
          <Roadmap roadmap={roadmap} />
        </Grid>
      </>
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
