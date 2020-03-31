import React, { useEffect, useState } from 'react'
import FlipMove from 'react-flip-move'
import defaultConfig from '../defaultConfig'
import FirebaseManager from '../FirebaseManager'
import List from './List'
import ListItem from './ListItem'
import Spinner from './Spinner'

const Votes = ({
  db,
  auth,
  bgColor: background = defaultConfig.colors.background,
  textColor: text = defaultConfig.colors.text,
  primaryColor: primary = defaultConfig.colors.primary
}) => {
  const colors = { background, text, primary }
  const manager = new FirebaseManager(db, auth)
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

  if (!user)
    return (
      <List backgroundColor={colors.background}>
        <Spinner
          style={{
            width: '10em',
            height: '10em',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate3d(-50%, -50%, 0)'
          }}
          color={primary}
        />
      </List>
    )

  return (
    <List backgroundColor={colors.background}>
      <FlipMove enterAnimation="fade" leaveAnimation="fade">
        {sorted.map(item => (
          <ListItem key={item.id} item={item} manager={manager} user={user} colors={colors} onVote={handleVote} />
        ))}
      </FlipMove>
    </List>
  )
}

export default Votes
