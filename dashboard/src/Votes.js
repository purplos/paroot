import { Box, Button, Flex, Heading, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/core'
import React from 'react'
import { db } from './firebaseApp'

const Votes = ({ votes, milestones }) => {
  const addTo = async (milestone, votable) => {
    try {
      await db
        .collection('Feedback_Roadmap')
        .doc(milestone.id)
        .update({
          features: [...milestone.features, { title: votable.title, votes: votable.votes.length }]
        })
      await db
        .collection('Feedback_Votable')
        .doc(votable.id)
        .delete()
    } catch (error) {
      console.log('Add error: ', error)
    }
  }

  return (
    <Box>
      <Heading mb={2}>Votes</Heading>
      {votes.map(votable => (
        <Flex px={4} py={2} bg="white" justify="space-between" align="center" borderBottom="1px solid #eee">
          <Box maxW="240px">
            <Text isTruncated title={`${votable.title}`}>
              {votable.title}
            </Text>
          </Box>
          <Menu>
            <MenuButton as={Button} rightIcon="chevron-down">
              Add to milestone
            </MenuButton>
            <MenuList>
              {milestones.map(milestone => (
                <MenuItem onClick={() => addTo(milestone, votable)}>{milestone.milestone}</MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      ))}
    </Box>
  )
}

export default Votes
