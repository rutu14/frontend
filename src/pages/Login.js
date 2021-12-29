import {
    Flex,
    Box,
    FormControl,
    FormErrorMessage,
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
} from '@chakra-ui/react';
import { ViewIcon,ViewOffIcon } from '@chakra-ui/icons'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as Routerlink, useNavigate } from 'react-router-dom'
import { login } from '../redux/action/userActions' 


export default function Login() {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [validationError, setValidationError] = useState(null)
    const [show, setShow] = useState( false )
    const  navigate = useNavigate()
    const toast = useToast()

    const handleClick = () => setShow( !show )    
    
    const Navigation = () => { navigate('/') }
    
    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin

    /* Redirecting after login. Check for location using v6 in router */ 
    useEffect(() => {
        if (userInfo) {
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

    /* const Validate = ( ) => {
        let flag = true
        if( email === null  ){
            setValidationError('Email required')
            flag = false
        }
        if ( password === null ){
            setValidationError('Password required')
            flag = false
        }
    } */

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(login(email,password))        
    }
  
    return (
      <Flex minH={'100vh - 96px - 64px'} align={'center'} justify={'center'} bg={useColorModeValue('gray.100', 'gray.900')}>

        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>

            <Stack align={'center'}>
                <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            </Stack>

            <Box rounded={'lg'} boxShadow={'lg'} p={8} bg={useColorModeValue('white', 'gray.700')} >

                <Stack spacing={4}>

                    <FormControl id="email" >
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" onChange={event => setEmail(event.currentTarget.value)} />
                        {/* {!isError ? ( null ) : ( */}
                        <FormErrorMessage>{validationError}</FormErrorMessage>
{/*                         // )}
 */}                    </FormControl>

                    <FormControl id="password" >
                        <FormLabel>Password</FormLabel>
                        <InputGroup size='md'>
                            <Input type={show ? 'text' : 'password'} onChange={event => setPassword(event.currentTarget.value)} />
                            <InputRightElement >
                                <IconButton variant={'link'} size="sm" _focus={{boxShadow: "none"}} color="current" onClick={handleClick}>
                                    {show ? <ViewOffIcon/> : <ViewIcon /> }
                                </IconButton>
                            </InputRightElement>
                        </InputGroup>
                        {/* {!isError ? ( null ) : (<FormErrorMessage>{validationError}</FormErrorMessage>)} */}
                    </FormControl>

                    <Stack spacing={10}>
                        <Button bg={'blue.400'} color={'white'} _focus={{boxShadow: "none"}} _hover={{ bg: 'blue.500'}} onClick={handleSubmit} isLoading={loading}>
                            Sign in
                        </Button>
                    </Stack>

                    <Text mt="4" mb="8" align="center" maxW="md" >
                        <Text as="span">Not a member! </Text>
                        <Link as={Routerlink} to={`/register`} _focus={{boxShadow: "none"}} color={useColorModeValue('blue.400','blue.400')}> SignUp </Link>
                    </Text>

                </Stack>

          </Box>

        </Stack>

      </Flex>
    )
}