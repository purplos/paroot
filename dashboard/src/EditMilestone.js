import {
  Button,
  Flex,
  FormLabel,
  Input,
  List,
  ListItem,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Switch
} from '@chakra-ui/core'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const EditMilestone = ({ currentMilestone, onSave, onClose, moveFeatureBack }) => {
  const [version, setVersion] = useState(currentMilestone.version)
  const [date, setDate] = useState(currentMilestone.date.toDate())
  const [released, setReleased] = useState(currentMilestone.released)
  const [visible, setVisible] = useState(currentMilestone.visible)
  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Version: {currentMilestone.version}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex mb={2} flexDir="column">
            <FormLabel htmlFor="version">Version number</FormLabel>
            <Input type="version" id="version" value={version} onChange={({ target }) => setVersion(target.value)} />
          </Flex>
          <Flex mb={2} flexDir="column">
            <FormLabel htmlFor="date">Release date</FormLabel>
            <Input name="date" id="date" as={DatePicker} selected={date} onChange={date => setDate(date)} />
          </Flex>
          <Flex mb={2} flexDir="row">
            <FormLabel htmlFor="released">Is released</FormLabel>
            <Switch
              name="released"
              id="released"
              isChecked={released}
              onChange={({ target }) => setReleased(target.checked)}
            />
          </Flex>
          <Flex mb={2} flexDir="row">
            <FormLabel htmlFor="visible">Is visible</FormLabel>
            <Switch
              name="visible"
              id="visible"
              isChecked={visible}
              onChange={({ target }) => setVisible(target.checked)}
            />
          </Flex>
          <List>
            {currentMilestone.features.map(feature => (
              <ListItem key={feature.id}>
                {feature.title} <Button onClick={() => moveFeatureBack(currentMilestone, feature)}>Move back</Button>
              </ListItem>
            ))}
          </List>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variantColor="blue" onClick={() => onSave(currentMilestone.id, { version, date, released, visible })}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </>
  )
}

export default EditMilestone
