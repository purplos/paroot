import React, { useState } from 'react'
import { db } from '../firebaseApp'
import styles from './SuggestionForm.module.css'

const SuggestionForm = () => {
  const [expanded, setExpanded] = useState(false)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const handleSubmit = event => {
    event.preventDefault()
    if (title.length < 1) return
    db.collection('Feedback_Suggestions').add({
      title,
      description
    })
    setTitle('')
    setDescription('')
    setExpanded(false)
  }
  return (
    <div className={styles.container}>
      <div
        className={styles.backdrop}
        onClick={() => setExpanded(false)}
        style={{
          pointerEvents: expanded ? 'auto' : 'none',
          opacity: expanded ? 1 : 0
        }}
      ></div>
      <div onClick={() => setExpanded(!expanded)} data-expanded={expanded} className={styles.expandArea}>
        Send a suggestion
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"
          />
        </svg>
      </div>
      {expanded && (
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            placeholder="Title"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
          <textarea
            className={styles.textArea}
            placeholder="Description"
            value={description}
            onChange={({ target }) => setDescription(target.value)}
          />
          <button className={styles.button} type="submit">
            Send suggestion
          </button>
        </form>
      )}
    </div>
  )
}

export default SuggestionForm
