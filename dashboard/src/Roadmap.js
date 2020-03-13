import React from 'react'
import { Box, Badge, Heading, List, ListItem, ListIcon, Flex } from '@chakra-ui/core'
import CreateRoadmap from './CreateRoadmap'

const Roadmap = ({ roadmap }) => {
  return (
    <Box>
      <Heading mb={2}>Milestones</Heading>
      {roadmap.map(milestone => (
        <Box bg="white" key={milestone.id} p="6" borderBottom="1px solid #eee">
          <Box d="flex" flexDir="column" alignItems="flex-start">
            <Flex mb={4} justifyContent="space-between" align="center" w="100%">
              <Badge rounded="full" px="2" variantColor="teal">
                {milestone.milestone}
              </Badge>
              <p>{milestone.date.toDate().toDateString()}</p>
            </Flex>
            <p>Released: {milestone.released ? 'Yes' : 'No'}</p>
            <List styleType="disc">
              {milestone.features.map(feature => (
                <ListItem key={feature.title}>
                  {feature.title} - {feature.votes}
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      ))}

      <CreateRoadmap />
    </Box>
  )
}

export default Roadmap
