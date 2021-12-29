import React from 'react'
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
} from '@chakra-ui/react';
import Nav from '../components/Navbar'

 function Product() {
    return (
        <div>
            {/* <Nav /> */}
            <Box m={1}
                minH='calc( 100vh - 96px - 64px )'>
                <Stack>
                    <Box>
                        <Heading as='h6'>
                            Product 1
                        </Heading>
                        <Text>
                            Product Description
                        </Text>
                    </Box>
                </Stack>
            </Box>
        </div>
    )
}
export default Product;

