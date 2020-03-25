class FirebaseManager {
  constructor(db, auth, config) {
    this.db = db
    this.auth = auth
    this.config = config
  }

  user = null
  votes = []

  onAuthChanged = () => {}
  onVotesChanged = () => {}

  setupAuthListener = () => {
    return this.auth.onAuthStateChanged(user => {
      this.user = user ? user : null
      this.onAuthChanged(this.user)
    })
  }

  signInAnonymously = async () => {
    try {
      await this.auth.signInAnonymously()
    } catch (error) {
      console.log('Sign in error: ', error)
    }
  }

  setupRealtimeListener = () => {
    const votesRef = this.db.collection(`${this.config.name}_votes`)
    return votesRef.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        const doc = change.doc
        if (change.type === 'added') {
          const data = { ...doc.data(), id: doc.id }
          this.votes = [...this.votes, data]
        }
        if (change.type === 'modified') {
          const id = doc.id
          this.votes = this.votes.map(votable => {
            if (votable.id !== id) return votable
            return { ...doc.data(), id: doc.id }
          })
        }
        if (change.type === 'removed') {
          const id = doc.id
          this.votes = this.votes.filter(votable => votable.id !== id)
        }
      })
      this.onVotesChanged(this.votes)
    })
  }

  setupVotes = async () => {
    this.unsubAuth = this.setupAuthListener()
    await this.signInAnonymously()
    this.unsubRealtime = this.setupRealtimeListener()

    return this.teardownVotes
  }

  teardownVotes = () => {
    this.unsubAuth && this.unsubAuth()
    this.unsubAuth = null
    this.unsubRealtime && this.unsubRealtime()
    this.unsubRealtime = null
  }

  toggleVote = (id, votes, uid) => {
    this.db.runTransaction(async transaction => {
      const docRef = this.db.collection(`${this.config.name}_votes`).doc(id)
      try {
        const latestDoc = await transaction.get(docRef)
        if (!latestDoc.exists) return
        const latestVotes = latestDoc.data().votes
        if (votes.includes(uid)) {
          if (!latestVotes.includes(uid)) return
          const votes = latestVotes.filter(vote => vote !== uid)
          transaction.update(docRef, { votes })
        } else {
          if (latestVotes.includes(uid)) return
          const votes = [...latestVotes, uid]
          transaction.update(docRef, { votes })
        }
      } catch (error) {
        console.log('Transaction error: ', error)
      }
    })
  }

  handleSuggestionForm = (title, description) => {
    this.db.collection(`${this.config.name}_suggestions`).add({
      title,
      description
    })
  }
}

export default FirebaseManager
