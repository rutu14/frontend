import moment from 'moment'
import {
    AspectRatio,
    Box,
    Button,
    HStack,
    Image,
    Link,
    Skeleton,
    Stack,
    StackProps,
    Text,
    useBreakpointValue,
    useColorModeValue,
    Badge,
    useDisclosure,
    Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Center,
  } from '@chakra-ui/react'
  import  {StarIcon} from '@chakra-ui/icons'
  import React  from 'react'
  import {  useNavigate } from 'react-router-dom'
  import { useDispatch, useSelector } from 'react-redux'


function CouponCard( prop ) {
    const { title,decscription,couponCode,quantity,expiry } = prop.coupon;
    const { isOpen, onOpen, onClose } = useDisclosure()
    let navigate = useNavigate();

    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const logged = () => {
        if (userInfo){
            return(console.log('Logged in'))
        }else{
            navigate('/login');
        }
    }
    
    return (  
        <>
        <Box p='4' maxW='sm'  borderWidth='1px' borderRadius='lg' cursor={'pointer'} overflow={'hidden'}
              onClick= { onOpen } bgColor={useColorModeValue('#f1f5f9', '#334155')} > 
            <Box mt='1'fontWeight='semibold' as='h4' lineHeight='tight' isTruncated     >
                {title}
            </Box>  
            <Box as='span' color={useColorModeValue('gray.600','#f8fafc')} fontSize='sm'>
                {decscription} 
            </Box>
            <Box display='flex' mt='2' alignItems='baseline'>
            <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2' >
             CouponCode:  
                <Badge borderRadius='full' mx='1' px='1' colorScheme='blue'>
                    {couponCode}
                </Badge>
            </Box>
            <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2'>
                 Quantity: {quantity} 
            </Box>
          </Box>
        </Box>

        <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader alignItems={'center'}>{title}</ModalHeader>
          <ModalCloseButton _focus={{boxShadow: "none"}} />
          <ModalBody>
            <Box as='span' color={useColorModeValue('gray.600','#f8fafc')} fontSize='sm'>
                {decscription} 
            </Box>
            <Box display='flex' flexDirection={'column'} mt='2' alignItems='baseline'>
            <Box color={useColorModeValue('gray.800','#f8fafc')} fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2' >
                CouponCode: {couponCode}
            </Box>
            <Box color={useColorModeValue('gray.800','#f8fafc')} fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2'>
                Quantity: {quantity} 
            </Box>
            <Box color={useColorModeValue('gray.800','#f8fafc')} fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2'>
                Expiry Date: {moment(expiry).format('MMMM Do YYYY')} 
            </Box>
            </Box>
          </ModalBody>
          <ModalFooter justifyContent={'space-around'} >
            <Button onClick={logged} _focus={{boxShadow: "none"}} >Claim</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </>
    )
  }

  export default CouponCard;