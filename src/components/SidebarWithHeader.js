import {
  Avatar,
  Box,
  Flex,
  Icon,
  Text,
  Stack,
  Image,
  Button,
  Heading,
  BoxProps,
  Drawer,
  DrawerContent,
  IconButton,
  useDisclosure,
  DrawerOverlay,
  useColorModeValue,
  HStack,
  Menu,
  MenuButton,
  VStack,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { FaBell, FaTree } from 'react-icons/fa'
import { AiOutlineTeam, AiOutlineHome } from 'react-icons/ai'
import { BsFolder2, BsCalendarCheck } from 'react-icons/bs'
import { FiBell, FiChevronDown, FiMenu } from 'react-icons/fi'
import { RiFlashlightFill } from 'react-icons/ri'
import Landing from '../pages/Landing'
import { useEffect, useState } from 'react'
import ToggleRow from './ToggleRow'
import { Web3Auth } from '@web3auth/modal'

export default function Index() {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const web3auth = new Web3Auth({
    clientId:
      'BG2-INDoDAzL5NE8NkSOyN5AhA_jfwB8zsfJ7cnZ1VquM60jwc900JwjP2AN9wnW1NBdrbTeywF5sEJVM_F0dHU',
    web3AuthNetwork: 'sapphire_devnet',
    chainConfig: {
      chainId: '0x186aa',
      chainNamespace: 'other',
      rpcTarget: 'https://testnet.veblocks.net/',
    },
  })

  const initWeb3Auth = async () => {
    try {
      await web3auth.initModal();
    } catch (error) {
      console.error('Error initializing web3auth modal:', error);
    }
  };

  useEffect(() => {
    initWeb3Auth()
  }, [])

//   await web3auth.initModal()

   const handleLogin = async () => {
    try {
      await web3auth.connect();
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error connecting to web3auth:', error);
    }
  };

  return (
    <Box as='section' bg='white' minH='100vh'>
      <SidebarContent display={{ base: 'none', md: 'unset' }} />
      <Drawer isOpen={isOpen} onClose={onClose} placement='left'>
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w='full' borderRight='none' />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition='.3s ease'>
        <Flex
          as='header'
          align='center'
          justify={{ base: 'space-between', md: 'flex-end' }}
          w='full'
          px='4'
          borderBottomWidth='1px'
          borderColor={useColorModeValue('inherit', 'gray.700')}
          bg='white'
          boxShadow='sm'
          h='14'
        >
          <IconButton
            aria-label='Menu'
            display={{ base: 'inline-flex', md: 'none' }}
            onClick={onOpen}
            icon={<FiMenu />}
            size='md'
          />

          <Flex align='center'>
            {!isLoggedIn ? (
              <Flex
                h='100vh'
                justifyContent='center'
                alignItems='center'
                bgColor='white'
              >
                <Button
                  mt='50px'
                  px={8}
                  bg='gray.900'
                  color={'white'}
                  rounded='10px'
                  _hover={{
                    transform: 'translateY(-2px)',
                    // boxShadow: 'lg',
                  }}
                  onClick={() => handleLogin()}
                >
                  Login
                </Button>
              </Flex>
            ) : (
              <>
                <HStack spacing={{ base: '0', md: '6' }}>
                  <Icon color='gray.500' as={FaBell} cursor='pointer' />
                  <Flex alignItems={'center'}>
                    <Menu>
                      <MenuButton
                        py={2}
                        transition='all 0.3s'
                        _focus={{ boxShadow: 'none' }}
                      >
                        <HStack>
                          <Avatar
                            size={'sm'}
                            src='https://avatars2.githubusercontent.com/u/37842853?v=4'
                          />
                          <VStack
                            display={{ base: 'none', md: 'flex' }}
                            alignItems='flex-start'
                            spacing='1px'
                            ml='2'
                          >
                            <Text fontSize='sm'>Shubhank</Text>
                            <Text fontSize='xs' color='gray.600'>
                              User
                            </Text>
                          </VStack>
                          <Box display={{ base: 'none', md: 'flex' }}>
                            <FiChevronDown />
                          </Box>
                        </HStack>
                      </MenuButton>
                      <MenuList bg='white' borderColor='gray'>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Settings</MenuItem>
                        <MenuItem>Billing</MenuItem>
                        <MenuDivider />
                        <MenuItem>Sign out</MenuItem>
                      </MenuList>
                    </Menu>
                  </Flex>
                </HStack>
              </>
            )}
          </Flex>
        </Flex>

        <Box as='main' p={14} minH='25rem' bg='white'>
          <Landing />
          <ToggleRow />
        </Box>
      </Box>
    </Box>
  )
}

const SidebarContent = () => (
  <Box
    as='nav'
    pos='fixed'
    top='0'
    left='0'
    zIndex='sticky'
    h='full'
    pb='10'
    overflowX='hidden'
    overflowY='auto'
    bg={useColorModeValue('white', 'gray.800')}
    borderColor={useColorModeValue('inherit', 'gray.700')}
    borderRightWidth='1px'
    w='60'
  >
    <Flex px='4' py='5' align='center'>
      <Icon as={FaTree} h={8} w={8} color="green" />
      <Text
        fontSize='2xl'
        ml='2'
        color={useColorModeValue('green.600', 'white')}
        fontWeight='semibold'
      >
        EcoWave
      </Text>
    </Flex>
    <Flex
      direction='column'
      as='nav'
      fontSize='md'
      color='gray.600'
      aria-label='Main Navigation'
    >
      <NavItem icon={AiOutlineHome}>Dashboard</NavItem>
      <NavItem icon={AiOutlineTeam}>Team</NavItem>
      <NavItem icon={BsFolder2}>Projects</NavItem>
      <NavItem icon={BsCalendarCheck}>Calendar</NavItem>
    </Flex>
  </Box>
)

const NavItem = () => {
  const color = useColorModeValue('gray.600', 'gray.300')

  return (
    <Flex
      align='center'
      px='4'
      py='3'
      cursor='pointer'
      role='group'
      fontWeight='semibold'
      transition='.15s ease'
      color={useColorModeValue('inherit', 'gray.400')}
      _hover={{
        bg: 'white',
        color: useColorModeValue('gray.900', 'gray.200'),
      }}
    ></Flex>
  )
}
