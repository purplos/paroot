import React, { useState } from 'react'
import styles from './VotableItem.module.css'
import { db } from '../firebaseApp'

const VotableItem = ({ item, user }) => {
  const [expandDescription, setExpand] = useState(false)
  const toggleVote = (id, votes) => {
    db.runTransaction(async transaction => {
      const docRef = db.collection('Feedback_Votable').doc(id)
      try {
        const latestDoc = await transaction.get(docRef)
        if (!latestDoc.exists) return
        const latestVotes = latestDoc.data().votes
        if (votes.includes(user.uid)) {
          if (!latestVotes.includes(user.uid)) return
          transaction.update(docRef, { votes: latestVotes.filter(vote => vote !== user.uid) })
        } else {
          if (latestVotes.includes(user.uid)) return
          transaction.update(docRef, { votes: [...latestVotes, user.uid] })
        }
      } catch (error) {
        console.log('Transaction error: ', error)
      }
    })
  }

  return (
    <li className={styles.item}>
      <div className={styles.headerbar}>
        <h2>{item.title}</h2>
        <button
          className={`${styles.button} ${item.votes.includes(user.uid) ? styles.active : ''}`}
          onClick={() => toggleVote(item.id, item.votes)}
          aria-label={item.votes.includes(user.uid) ? 'Unvote' : 'Vote'}
        >
          {item.votes.length}{' '}
          <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M17.71,11.29l-5-5a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-5,5a1,1,0,0,0,1.42,1.42L11,9.41V17a1,1,0,0,0,2,0V9.41l3.29,3.3a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,11.29Z"
            />
          </svg>
        </button>
      </div>
      <div
        onClick={() => setExpand(!expandDescription)}
        className={`${styles.description} ${expandDescription ? '' : styles.descHidden}`}
      >
        <p>{item.description}</p>
      </div>
    </li>
  )
}

export default VotableItem
