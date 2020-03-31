import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
  useToast
} from '@chakra-ui/core'
import React from 'react'
import DeleteWrapper from './DeleteWrapper'
import { db } from './firebaseApp'

const Votes = ({ votes, milestones, refresh }) => {
  const toast = useToast()
  const addTo = async (milestone, votable) => {
    try {
      await db
        .collection(`paroot_milestones`)
        .doc(milestone.id)
        .update({
          features: [
            ...milestone.features,
            { id: votable.id, title: votable.title, description: votable.description, votes: votable.votes }
          ]
        })
      await db
        .collection(`paroot_votes`)
        .doc(votable.id)
        .delete()
      refresh()
      toast({
        title: 'Feature has been added to milestone',
        description: `Feature titled "${votable.title}" has been added to milestone version ${milestone.version}.`,
        status: 'success',
        position: 'top-right'
      })
    } catch (error) {
      refresh()
      toast({
        title: 'Something went wrong',
        description: `Something went wrong when trying to add feature titled "${votable.title}" to milestone ${milestone.version}.`,
        status: 'error',
        position: 'top-right'
      })
    }
  }

  const deleteVotable = async votable => {
    try {
      await db
        .collection(`paroot_votes`)
        .doc(votable.id)
        .delete()
      refresh()
      toast({
        title: 'Feature has been deleted',
        description: `Feature titled "${votable.title}" has been deleted`,
        status: 'success',
        position: 'top-right'
      })
    } catch (error) {
      refresh()
      toast({
        title: 'Something went wrong',
        description: `Something went wrong when trying to delete feature titled "${votable.title}".`,
        status: 'error',
        position: 'top-right'
      })
    }
  }

  return (
    <Box>
      <Heading size="lg" mb={2}>
        Votes
      </Heading>
      {votes.map(votable => (
        <Flex
          key={votable.id}
          px={4}
          py={4}
          bg="white"
          justify="space-between"
          align="center"
          borderBottom="1px solid #eee"
        >
          <Box maxW="240px">
            <Flex flexDir="column">
              <Heading isTruncated title={`${votable.title}`} size="md">
                {votable.title}
              </Heading>
              <Text title={`${votable.description}`} fontSize="md">
                {votable.description}
              </Text>
              <Text fontSize="sm">Votes: {votable.votes.length}</Text>
            </Flex>
          </Box>
          <Flex>
            <Menu>
              <MenuButton as={Button} rightIcon="chevron-down">
                Add
              </MenuButton>
              <MenuList>
                <MenuGroup title="Add to milestone">
                  {milestones
                    .filter(milestone => !milestone.released)
                    .map(milestone => (
                      <MenuItem key={milestone.id} onClick={() => addTo(milestone, votable)}>
                        {milestone.version}
                      </MenuItem>
                    ))}
                </MenuGroup>
              </MenuList>
            </Menu>
            <DeleteWrapper onConfirm={() => deleteVotable(votable)}>
              <IconButton ml={2} icon="delete" variant="ghost" variantColor="red"></IconButton>
            </DeleteWrapper>
          </Flex>
        </Flex>
      ))}
    </Box>
  )
}

export default Votes
