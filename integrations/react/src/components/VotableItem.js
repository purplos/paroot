import React from 'react'
import styles from './VotableItem.module.css'
import firebase from '../firebaseApp'

const db = firebase.firestore()

const VotableItem = ({ item, user }) => {
  const toggleVote = (id, votes) => {
    db.runTransaction(async transaction => {
      const docRef = db.collection('Feedback_Votable').doc(id)
      try {
        const latestDoc = await transaction.get(docRef)
        if (!latestDoc.exists) return
        const latestVotes = latestDoc.data().votes
        if (votes.includes(user.uid)) {
          if (!latestVotes.includes(user.uid)) return
          db.collection('Feedback_Votable')
            .doc(id)
            .update({
              votes: latestVotes.filter(vote => vote !== user.uid)
            })
        } else {
          if (latestVotes.includes(user.uid)) return
          db.collection('Feedback_Votable')
            .doc(id)
            .update({
              votes: [...latestVotes, user.uid]
            })
        }
      } catch (error) {
        console.log('Transaction error: ', error)
      }
    })
  }

  return (
    <li className={styles.item}>
      {item.title} - {item.votes.length} votes
      <button
        className={styles.button}
        onClick={() => toggleVote(item.id, item.votes)}
        aria-label={item.votes.includes(user.uid) ? 'Unvote' : 'Vote'}
      >
        {item.votes.includes(user.uid) ? <img src="/heart-filled.svg" alt="" /> : <img src="/heart.svg" alt="" />}
      </button>
    </li>
  )
}

export default VotableItem
