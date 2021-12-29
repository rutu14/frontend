import { ReactNode } from 'react'
import { Link as Routerlink, useNavigate } from 'react-router-dom'
import {
  Box,
  Text,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  HStack,
  Heading
} from '@chakra-ui/react'
import { MoonIcon, SunIcon,HamburgerIcon, CloseIcon, LockIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/action/userActions'

const Links = ['Home','Product']
const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    as={Routerlink} 
    to={`/${children}`}
    px={2}
    py={1}
    rounded={'md'}  
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }} >
    {children}
  </Link>
)

export default function Nav() {

	const { colorMode, toggleColorMode } = useColorMode()
  	const { isOpen, onOpen, onClose } = useDisclosure()
	const navigate = useNavigate()
	const dispatch = useDispatch()
  	const userLogin = useSelector((state) => state.userLogin)
  	const { userInfo } = userLogin

  	const logoutHandler = () => { dispatch(logout()) }

	const Navigation = () => { navigate('/login') }

	const IsAuth = () =>{
		if( userInfo ){
		  return(
				<Menu>
				  <MenuButton as={Button}	rounded={'full'} variant={'link'} _focus={{boxShadow: "none"}} cursor={'pointer'} size={'sm'} minW={0} >
					<Avatar
					  size={'sm'}
					  name={userInfo.username}
					/>
				  </MenuButton>
				  <MenuList alignItems={'center'}>
					<Center>
					  <p>Username : {userInfo.username}</p>
					</Center>
          <MenuDivider />
					<MenuItem >Order</MenuItem>
					<MenuDivider />
					<MenuItem onClick={logoutHandler} >Logout</MenuItem>
				  </MenuList>
				</Menu>
		  )
		}else{
		  return(
			<IconButton
			  variant={'link'} size="md" fontSize="lg" _focus={{boxShadow: "none"}} color="current" marginLeft="2"
			  onClick={Navigation}
			  icon={ <LockIcon /> } />
		  )
		}
  	}
  
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            _focus={{boxShadow: "none"}}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Box>
              <Heading as='h3' size='lg'>
                Coupons
              </Heading>
          </Box>          

          <Flex alignItems={'center'}>

          <Stack direction={'row'} spacing={7}>
          <HStack
              as={'nav'}
              spacing={4}              
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>
                    {link}
                </NavLink>
              ))}
            </HStack>
              <Button 
                rounded={'full'}
                  variant={'link'}
                  _focus={{boxShadow: "none"}}
                   onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <IsAuth />
              
            </Stack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}

      </Box>
    </>
  )
}  