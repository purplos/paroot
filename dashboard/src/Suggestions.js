import React from 'react'
import { db } from './firebaseApp'
import { Text, Button, Heading, Flex, Box } from '@chakra-ui/core'

const Suggestions = ({ suggestions, setSuggestions }) => {
  const approveSuggestion = async suggestion => {
    try {
      await db
        .collection('Feedback_Votable')
        .doc(suggestion.id)
        .set({
          title: suggestion.title,
          description: suggestion.description,
          votes: []
        })
      await db
        .collection('Feedback_Suggestions')
        .doc(suggestion.id)
        .delete()
      setSuggestions(suggestions.filter(sug => sug.id !== suggestion.id))
    } catch (error) {
      console.log('Approve error: ', error)
    }
  }

  const deleteSuggestion = async suggestion => {
    try {
      await db
        .collection('Feedback_Suggestions')
        .doc(suggestion.id)
        .delete()
      setSuggestions(suggestions.filter(sug => sug.id !== suggestion.id))
    } catch (error) {
      console.log('Approve error: ', error)
    }
  }
  return (
    <Box>
      <Heading mb={2}>Suggestions</Heading>
      {suggestions.length > 0 ? (
        <>
          {suggestions.map(suggestion => (
            <Flex
              justify="space-between"
              align="center"
              borderBottom="1px solid #eee"
              bg="white"
              p={2}
              key={suggestion.id}
            >
              <Heading size="lg">{suggestion.title}</Heading>
              <div className="buttons">
                <Button variantColor="green" mr={2} onClick={() => approveSuggestion(suggestion)}>
                  Approve
                </Button>
                <Button variant="outline" variantColor="red" onClick={() => deleteSuggestion(suggestion)}>
                  Delete
                </Button>
              </div>
            </Flex>
          ))}
        </>
      ) : (
        <Text>No new suggestions</Text>
      )}
    </Box>
  )
}

export default Suggestions
