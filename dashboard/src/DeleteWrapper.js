import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/core'
import React from 'react'

const DeleteWrapper = ({
  children,
  onConfirm,
  title = 'Confirm deletion',
  text = 'Are you sure you want to delete?',
  cancelText = 'Cancel',
  deleteText = 'Yes, delete this'
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleClose = () => {
    onClose()
  }
  const onClick = () => onOpen()
  const deleteButton = React.cloneElement(children, { onClick: onClick })
  return (
    <>
      {deleteButton}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{text}</ModalBody>

          <ModalFooter>
            <Button onClick={handleClose} mr={2} autoFocus>
              {cancelText}
            </Button>
            <Button onClick={onConfirm} variantColor="red">
              {deleteText}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default DeleteWrapper
