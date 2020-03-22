import React, { useState, useEffect } from 'react'
import FirebaseManager from '../FirebaseManager'
import List from './List'
import ListItem from './ListItem'

const Votes = ({ db, auth, config }) => {
  const manager = new FirebaseManager(db, auth, config)
  const [votes, setVotes] = useState([])
  const [user, setUser] = useState(null)

  const setLoadingById = id => {
    setVotes(votes.map(vote => (vote.id === id ? { ...vote, loading: true } : vote)))
  }

  const handleVote = (id, votes) => {
    setLoadingById(id)
    manager.toggleVote(id, votes, user.uid)
  }

  useEffect(() => {
    const unsubAuth = manager.setupAuthListener()
    manager.signInAnonymously()
    let unsubRealtime
    manager.onAuthChanged = user => {
      if (user) {
        unsubRealtime = manager.setupRealtimeListener()
      } else {
        if (unsubRealtime) {
          unsubRealtime()
        }
      }
      setUser(user)
    }
    manager.onVotesChanged = votes => setVotes(votes)
    return () => {
      unsubAuth()
      unsubRealtime()
    }
  }, [])

  const sorted = votes.sort((a, b) => b.votes.length - a.votes.length)

  if (!user) return 'Loading user...'

  return (
    <List>
      {sorted.map(item => (
        <ListItem key={item.id} item={item} manager={manager} user={user} onVote={handleVote} />
      ))}
    </List>
  )
}

export default Votes
