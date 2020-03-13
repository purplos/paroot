import React, { useState } from 'react'
import { db } from '../firebaseApp'
import styles from './SuggestionForm.module.css'

const SuggestionForm = () => {
  const [suggestion, setSuggestion] = useState('')
  const handleSubmit = event => {
    event.preventDefault()
    if (suggestion.length < 1) return
    db.collection('Feedback_Suggestions').add({
      title: suggestion
    })
    setSuggestion('')
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Add your suggestion"
        value={suggestion}
        onChange={({ target }) => setSuggestion(target.value)}
      />
      <button className={styles.button} type="submit">
        Send suggestion
      </button>
    </form>
  )
}

export default SuggestionForm
