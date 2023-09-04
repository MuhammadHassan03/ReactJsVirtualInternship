import { Button, Center, IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'


export const ProfileModel = ({ user, children }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            {children ? (
                <span onClick={onOpen}>{children}</span>
            ) : (
                <IconButton
                    display={{ base: "flex" }}
                    icon={<ViewIcon />}
                    onClick={onOpen}
                ></IconButton>
            )}

            <Modal size={'lg'} isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent
                h={"410px"}>
                    <ModalHeader
                    fontSize={40}
                    fontFamily={"Work sans"}
                    display={'flex'}
                    justifyContent={'center'}
                    >{user.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                        display={'flex'}
                        flexDir={'column'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                    >
                        <Image
                        borderRadius="full"
                        boxSize="150px"
                        src={user.picture}
                        alt={user.name}
                        />
                        <Text>Email: {user.email}</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>
    )
}
