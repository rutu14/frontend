import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    InputRightElement,
    InputGroup,
    IconButton,
    useToast
} from '@chakra-ui/react'
import { ViewIcon,ViewOffIcon } from '@chakra-ui/icons'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as Routerlink, useNavigate } from 'react-router-dom'
import { register } from '../redux/action/userActions' 


export default function Register() {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [repassword, setRePassword] = useState(null)
    const [show, setShow] = useState( false )
    const  navigate = useNavigate()    
    const toast = useToast()

    const handleClick = () => setShow( !show )    
    
    const Navigation = () => { navigate('/login') }
    
    const dispatch = useDispatch()
    const userRegister = useSelector((state) => state.userRegister)
    console.log( userRegister )
    const { loading, error, userInfo } = userRegister

    useEffect(() => {
        if (userInfo) {
            toast({
                title: 'Navigating to Login Page',
                description: 'You are successfully registered',
                status: 'sucess',
                variant: 'left-accent',
                position: 'top',
                duration: 3000,
                isClosable: true,
                })
          Navigation()
        }
        if (error) {
            toast({
            title: error,
            description: error,
            status: 'error',
            variant: 'left-accent',
            position: 'top',
            duration: 3000,
            isClosable: true,
            })
      }
      }, [userInfo,error, Navigation])

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(register(email,password))
    }
  
    return (
      <Flex minH={'100vh - 96px - 64px '} align={'center'} justify={'center'} bg={useColorModeValue('gray.100', 'gray.900')}>

        <Stack spacing={3}  maxW={'lg'} py={6} px={6}>

            <Stack align={'center'}>
                <Heading fontSize={'4xl'}>Sign Up</Heading>
            </Stack>

            <Box rounded={'lg'} boxShadow={'lg'} p={8} bg={useColorModeValue('white', 'gray.700')} >

                <Stack spacing={4}>

                    <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" onChange={event => setEmail(event.currentTarget.value)} />
                    </FormControl>

                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <InputGroup size='md'>
                            <Input type={show ? 'text' : 'password'} onChange={event => setPassword(event.currentTarget.value)} />
                            <InputRightElement >
                                <IconButton variant={'link'} size="sm" _focus={{boxShadow: "none"}} color="current" onClick={handleClick}>
                                    {show ? <ViewOffIcon/> : <ViewIcon /> }
                                </IconButton>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>

                    <FormControl id="repassword">
                        <FormLabel>Re-type Password</FormLabel>
                        <InputGroup size='md'>
                            <Input type={show ? 'text' : 'password'} onChange={event => setRePassword(event.currentTarget.value)} />
                            <InputRightElement >
                                <IconButton variant={'link'} size="sm" _focus={{boxShadow: "none"}} color="current" onClick={handleClick}>
                                    {show ? <ViewOffIcon/> : <ViewIcon /> }
                                </IconButton>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>

                    <Stack spacing={10}>
                        <Button bg={'blue.400'} color={'white'} _focus={{boxShadow: "none"}} _hover={{ bg: 'blue.500'}} onClick={handleSubmit}>
                            Sign in
                        </Button>
                    </Stack>

                    <Text mt="4" mb="8" align="center" maxW="md" >
                        <Text as="span">Already  a member?  </Text>
                        <Link as={Routerlink} to={`/login`} _focus={{boxShadow: "none"}} color={useColorModeValue('blue.400','blue.400')}> SignIn </Link>
                    </Text>

                </Stack>

          </Box>

        </Stack>

      </Flex>
    );
}