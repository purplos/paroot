import { Badge, Box, Flex, Heading, IconButton, List, ListItem, Modal, useToast } from '@chakra-ui/core'
import React, { useState } from 'react'
import CreateRoadmap from './CreateRoadmap'
import EditMilestone from './EditMilestone'
import { db } from './firebaseApp'

const Roadmap = ({ roadmap, refresh }) => {
  const [currentMilestone, setCurrentMilestone] = useState(null)
  const toast = useToast()

  const handleEditSave = async (id, doc) => {
    try {
      await db
        .collection(`paroot_milestones`)
        .doc(id)
        .update(doc)
      refresh()
    } catch (error) {
      console.log(error)
    }
  }

  const moveFeatureBack = async (milestone, feature) => {
    const { title, description, votes } = feature
    try {
      await db
        .collection(`paroot_milestones`)
        .doc(milestone.id)
        .update({
          features: milestone.features.filter(f => f.id !== feature.id)
        })
      await db
        .collection(`paroot_votes`)
        .doc(feature.id)
        .set({ title, description, votes })
      refresh()
      toast({
        title: 'Feature has been moved back',
        description: `Feature titled "${feature.title}" has been back to votes.`,
        status: 'success',
        position: 'top-right'
      })
    } catch (error) {
      refresh()
      toast({
        title: 'Something went wrong',
        description: `Something went wrong when trying to move feature titled "${feature.title}" back to votes.`,
        status: 'error',
        position: 'top-right'
      })
    }
  }

  const sortedRoadmap = roadmap.sort((a, b) => b.date.toDate() - a.date.toDate())
  return (
    <Box>
      <Heading size="lg" mb={2}>
        Milestones
      </Heading>

      <CreateRoadmap refresh={refresh} />
      {sortedRoadmap.map(milestone => (
        <Box bg="white" key={milestone.id} p="4" borderBottom="1px solid #eee">
          <Box d="flex" flexDir="column" alignItems="flex-start">
            <Flex mb={4} justifyContent="space-between" align="center" w="100%">
              <Badge rounded="full" px="2" variantColor={milestone.released ? 'green' : 'gray'}>
                {milestone.version}
              </Badge>
              <p>{milestone.date.toDate().toDateString()}</p>
              <IconButton icon="edit" variant="ghost" onClick={() => setCurrentMilestone(milestone)} />
            </Flex>
            <List>
              <ListItem>
                Released: <b>{milestone.released ? 'Yes' : 'No'}</b>
              </ListItem>
              <ListItem>
                Visible to users: <b>{milestone.visible ? 'Yes' : 'No'}</b>
              </ListItem>

              <ListItem>
                <Heading size="sm">Features</Heading>
                <List styleType="disc">
                  {milestone.features.map(feature => (
                    <ListItem key={feature.title}>
                      {feature.title} - {feature.votes.length} votes
                    </ListItem>
                  ))}
                </List>
              </ListItem>
            </List>
          </Box>
        </Box>
      ))}
      <Modal isOpen={currentMilestone} onClose={() => setCurrentMilestone(null)}>
        {currentMilestone && (
          <EditMilestone
            currentMilestone={currentMilestone}
            onSave={handleEditSave}
            onClose={() => setCurrentMilestone(null)}
            moveFeatureBack={moveFeatureBack}
          ></EditMilestone>
        )}
      </Modal>
    </Box>
  )
}

export default Roadmap
