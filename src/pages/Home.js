import {React,ReactNode} from 'react'
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
  Heading,
  SimpleGrid
} from '@chakra-ui/react';
import Nav from '../components/Navbar';
import Homepage from '../services/Homepage';
import CouponCard from '../components/CouponCard';

function Home() {

    const couponDetails = Homepage();
    console.log(couponDetails);

    if (couponDetails === "Nothing present"){
        return(<>
            <Box
             m={1}
             minH='calc( 100vh - 96px - 64px )'>                
                <Center>
                    <br />
                    <Heading as='h6'>
                        No Coupons Present
                    </Heading>
                </Center>
            </Box>
            </>)
    }else{   
    return (
        <>
        <Box
         m={[4,5]}
         minH ='calc( 100vh - 96px - 64px )'>
            <Box mx="auto" px={{ base: '6', md: '8' }} >
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6">
              {couponDetails.map((coupon) => (
                  <CouponCard key={coupon.id} coupon={coupon} />
              ))}
            </SimpleGrid>
          </Box> 
        </Box>
        </>
    )
}
}

export default Home;
