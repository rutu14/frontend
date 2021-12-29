import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Center,
  Text,
  useColorModeValue,
  VisuallyHidden,Flex,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as Routerlink, useNavigate } from 'react-router-dom';


  
export default function Footer() {

const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

const MerchantLogin = () => {
  if(userInfo) {
    return null
  }else{
    return(
      <Link as={Routerlink} to={`/merchantlogin`} rounded={'md'}   _focus={{boxShadow: "none"}}> Merchant Login</Link>
    )
  }
}
  return (
    <Box position={'relative'} left={0} bottom={0} bg={useColorModeValue('gray.50', 'gray.900')}       color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={4} spacing={4} justify={'center'} align={'center'}>
        <Stack direction={'row'} spacing={6}>
          <Link as={Routerlink} to={`/`} _focus={{boxShadow: "none"}} >Home</Link>
          <Link as={Routerlink} to={`/product`} _focus={{boxShadow: "none"}} >Product</Link>
        </Stack>
    <Box position={'absolute'} right={'4'} bottom={'1'} >
    <MerchantLogin />				 
    </Box>		  
        <Center>© All rights reserved</Center>
      </Container>
    </Box>
  )
}