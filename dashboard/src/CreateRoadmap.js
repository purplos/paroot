import React, { useState } from 'react'
import { db } from './firebaseApp'
import { FormControl, FormLabel, Input, Button, Box } from '@chakra-ui/core'

const CreateRoadmap = () => {
  const [version, setVersion] = useState('')
  const [date, setDate] = useState()

  const handleSubmit = event => {
    event.preventDefault()
    db.collection('Feedback_Roadmap').add({
      milestone: version,
      date: new Date(date),
      features: [],
      released: false,
      visible: false
    })
  }
  return (
    <Box as="form" p={2} bg="white" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
      <FormLabel htmlFor="version">Version milestone</FormLabel>
      <Input
        type="text"
        name="version"
        id="version"
        mb={2}
        value={version}
        onChange={({ target }) => setVersion(target.value)}
      />

      <FormLabel htmlFor="date">Release date</FormLabel>
      <Input mb={2} type="date" name="date" id="date" value={date} onInput={({ target }) => setDate(target.value)} />
      <Button type="submit">Create milestone</Button>
    </Box>
  )
}

export default CreateRoadmap
