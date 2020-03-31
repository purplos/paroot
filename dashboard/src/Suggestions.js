import { Box, Flex, Heading, IconButton, Text, useToast } from '@chakra-ui/core'
import React from 'react'
import DeleteWrapper from './DeleteWrapper'
import { db } from './firebaseApp'

const Suggestions = ({ suggestions, setSuggestions, refresh }) => {
  const toast = useToast()
  const approveSuggestion = async suggestion => {
    try {
      await db
        .collection(`paroot_votes`)
        .doc(suggestion.id)
        .set({
          title: suggestion.title,
          description: suggestion.description,
          votes: []
        })
      await db
        .collection(`paroot_suggestions`)
        .doc(suggestion.id)
        .delete()
      refresh()
      toast({
        title: 'Suggestion approved',
        description: `Suggestion titled "${suggestion.title}" has been approved, and can now be voted on.`,
        status: 'success',
        position: 'top-right'
      })
    } catch (error) {
      refresh()
      toast({
        title: 'Something went wrong',
        description: `Something went wrong when trying to approve suggestion titled "${suggestion.title}".`,
        status: 'error',
        position: 'top-right'
      })
    }
  }

  const deleteSuggestion = async suggestion => {
    try {
      await db
        .collection(`paroot_suggestions`)
        .doc(suggestion.id)
        .delete()
      refresh()
      toast({
        title: 'Suggestion deleted',
        description: `Suggestion titled "${suggestion.title}" has been deleted.`,
        status: 'success',
        position: 'top-right'
      })
    } catch (error) {
      refresh()
      toast({
        title: 'Something went wrong',
        description: `Something went wrong when trying to delete suggestion titled "${suggestion.title}".`,
        status: 'error',
        position: 'top-right'
      })
    }
  }
  return (
    <Box>
      <Heading size="lg" mb={2}>
        Suggestions
      </Heading>
      {suggestions.length > 0 ? (
        <>
          {suggestions.map(suggestion => (
            <Flex
              justify="space-between"
              align="center"
              borderBottom="1px solid #eee"
              bg="white"
              p={4}
              key={suggestion.id}
            >
              <Flex flexDir="column">
                <Heading size="md">{suggestion.title}</Heading>
                <Text fontSize="md">{suggestion.description}</Text>
              </Flex>
              <div className="buttons">
                <IconButton
                  variantColor="green"
                  icon="check"
                  mr={2}
                  onClick={() => approveSuggestion(suggestion)}
                ></IconButton>
                <DeleteWrapper onConfirm={() => deleteSuggestion(suggestion)}>
                  <IconButton variant="ghost" icon="delete" variantColor="red"></IconButton>
                </DeleteWrapper>
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
