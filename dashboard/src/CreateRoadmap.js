import { Box, Button, FormLabel, Input, useToast } from '@chakra-ui/core'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { db } from './firebaseApp'

const CreateRoadmap = ({ refresh }) => {
  const [version, setVersion] = useState('')
  const [date, setDate] = useState(new Date())

  const toast = useToast()

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      await db.collection('paroot_milestones').add({
        version,
        date: new Date(date),
        features: [],
        released: false,
        visible: false
      })
      refresh()
      toast({
        title: 'Milestone created',
        description: `Milestone version "${version}" has been created.`,
        status: 'success',
        position: 'top-right'
      })
    } catch (error) {
      refresh()
      toast({
        title: 'Something went wrong',
        description: `Could not create milestone version "${version}".`,
        status: 'error',
        position: 'top-right'
      })
    }
  }
  return (
    <Box
      as="form"
      p={4}
      borderBottom="1px solid #eee"
      bg="white"
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
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
      <Input mb={2} as={DatePicker} selected={date} onChange={date => setDate(date)} />
      <Button type="submit">Create milestone</Button>
    </Box>
  )
}

export default CreateRoadmap
