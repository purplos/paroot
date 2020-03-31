import { Box, Button, Flex, FormLabel, Grid, Input } from '@chakra-ui/core'
import React, { useCallback, useEffect, useState } from 'react'
import { auth, db } from './firebaseApp'
import Roadmap from './Roadmap'
import Suggestions from './Suggestions'
import Votes from './Votes'

const App = () => {
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [suggestions, setSuggestions] = useState([])
  const [votes, setVotes] = useState([])

  const [roadmap, setRoadmap] = useState([])
  const fetchRoadmap = async () => {
    try {
      const roadmapDoc = await db.collection(`paroot_milestones`).get()
      setRoadmap(roadmapDoc.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    } catch (error) {
      console.log('Fetch roadmap error: ', error)
    }
  }

  const setupAuthListener = useCallback(() => {
    return auth.onAuthStateChanged(signedInUser => {
      if (signedInUser) {
        setUser(signedInUser)
        fetchSuggestions()
      } else {
        console.log('Signed out')
        setUser(null)
        // User is signed out.
        // ...
      }
    })
  }, [])

  const fetchSuggestions = async () => {
    try {
      const querySnapshot = await db.collection(`paroot_suggestions`).get()
      setSuggestions(querySnapshot.docs.map(suggestion => ({ ...suggestion.data(), id: suggestion.id })))
    } catch (error) {
      console.log('Fetch suggestions error: ', error)
    }
  }

  const fetchVotes = async () => {
    try {
      const querySnapshot = await db.collection(`paroot_votes`).get()
      setVotes(querySnapshot.docs.map(votable => ({ ...votable.data(), id: votable.id })))
    } catch (error) {
      console.log('Fetch votes error: ', error)
    }
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      await signIn(email, password)
      setEmail('')
      setPassword('')
    } catch (error) {
      console.log('SignIn Error: ', error)
    }
  }

  const signIn = async (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
  }

  useEffect(() => {
    const unsub = setupAuthListener()
    return () => {
      unsub()
    }
  }, [setupAuthListener])

  const refresh = useCallback(() => {
    fetchSuggestions()
    fetchRoadmap()
    fetchVotes()
  }, [])

  useEffect(() => {
    refresh()
  }, [refresh])

  if (user) {
    return (
      <>
        <Flex p={4} justify="flex-end">
          <Button size="sm" variantColor="blue" onClick={refresh}>
            Refresh
          </Button>
          <Button ml={4} size="sm" onClick={() => auth.signOut()}>
            Sign out
          </Button>
        </Flex>
        <Grid templateColumns="1fr 1fr 1fr" gap={4} p={4}>
          <Suggestions suggestions={suggestions} setSuggestions={setSuggestions} refresh={refresh} />
          <Votes votes={votes} setVotes={setVotes} milestones={roadmap} refresh={refresh} />
          <Roadmap roadmap={roadmap} refresh={refresh} />
        </Grid>
      </>
    )
  }

  return (
    <Box as="form" maxW="24em" p={8} boxShadow="sm" bg="white" margin="0 auto" mt={12} onSubmit={handleSubmit}>
      <FormLabel htmlFor="email">E-mail</FormLabel>
      <Input
        mb={4}
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <FormLabel htmlFor="password">Password</FormLabel>
      <Input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <Flex justify="flex-end" pt={4}>
        <Button variantColor="blue" type="submit">
          Sign in
        </Button>
      </Flex>
    </Box>
  )
}

export default App
